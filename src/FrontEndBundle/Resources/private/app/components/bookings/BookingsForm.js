import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom';
import {Row, Input} from 'react-materialize';
import * as routes from '../../constants/routes';
import Loader from '../utils/Loader';
import validate from 'validate.js';
import bookingConstraints from '../../validation/booking';
import * as utils from '../../utils/utils';
import FormNavBar from '../menu/FormNavBar';

import moment from 'moment';
import * as actions from '../../actions/bookingsActions';
import * as venuesActions from '../../actions/venuesActions';
import ConfirmModal from "../utils/ConfirmModal";
import l10n from "../../l10n/localization";


/**
 * Validation rules for received props
 * @type {{dispatch: *, item: *, fetching: *, errors: *}}
 */
const propTypes = {
    dispatch: PropTypes.func.isRequired,
    item: PropTypes.object,
    fetching: PropTypes.bool,
    errors: PropTypes.object
};

class BookingForm extends React.Component {
    /**
     * Initialize the state of form fields and errors
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {};
        this.state = Object.assign(this.state, {
            fields: this.getEmptyFields(),
            errors: this.getEmptyFields(),
        });
    }

    /**
     * Called when the form is being submitted
     * @param e
     */
    onSubmit(e) {
        e.preventDefault();
        let item = this.props.item;

        // Get any validations errors using validate.js
        // Use replaceEmptyWithNull because validate.js requires an element with a constraint to be null
        // to be accepted as "empty". Empty string will trigger validation error.
        let validationErrors = validate(
            utils.replaceEmptyWithNull(item),
            bookingConstraints,
            {fullMessages: false}
        );

        if (!validationErrors) {
            // If validation is OK, decide whether to update or add the current item
            if (item.id !== undefined) {
                // If submitted item already has an ID, send an edit action
                this.props.dispatch(actions.updateBooking(item.id, document.getElementById('booking-form')));
            }
            else {
                // Else send an Add action
                this.props.dispatch(actions.addBooking(document.getElementById('booking-form')));
            }
        }
        else {
            // If there were validation errors, copy them to the state so they can be displayed in the form
            let newState = Object.assign({}, this.state);
            newState.errors = utils.getErrors(validationErrors);
            this.setState(newState);
            this.props.dispatch(actions.validationError(newState.errors));
        }
    }

    /**
     * Dispatch an action to open the "remove" modal box
     * @param e
     */
    onRemove(e) {
        e.preventDefault();
        this.props.dispatch(actions.removeBooking(this.props.item.id));
    }

    /**
     * Dispatch an action when a field is changed, to update the global state
     * @param e
     */
    onChange(e) {
        let newState = Object.assign({}, this.state);
        newState.fields[e.target.name] = e.target.value;
        this.setState(newState);
        this.props.dispatch(actions.editBooking(e.target.name, e.target.value));
    }

    /**
     * Validate single fields every time we focus out of them
     * @param e
     */
    onBlur(e) {
        // Empty string will be seen as validation error, so empty values must be null for validation
        let value = e.target.value ? e.target.value : null;
        let newState = Object.assign({}, this.state);
        let errors = validate.single(value, bookingConstraints[e.target.name]);
        this.state.errors[e.target.name] = errors && errors.length ? errors[0] : '';
        this.setState(newState);
    }

    /**
     * Returns true if the current form is creating a new record, false if we're editing
     * @returns {boolean}
     */
    isNew() {
        return this.props.item === null || this.props.item.id === undefined;
    }

    /**
     * Returns the title that should be used in the navbar.
     * If we're currently fetching something, title should be empty.
     * @returns {string}
     */
    getTitle() {
        let header = '';
        if (!this.isNew()) {
            header = l10n.formatString(l10n.editing, this.getFullName());
        }
        else if (!this.props.fetching) {
            header = l10n.new_booking;
        }
        return header;
    }

    getSubtitle() {
        if (this.props.eventItem) {
            return this.props.eventItem.name + ' / ' + moment(this.props.eventItem.startDate).format('D MMM YYYY');
        }
    }

    /**
     * Returns a text input for the given form field
     * @param fieldName
     * @param type
     * @returns {XML}
     */
    getTextInput(fieldName, type = '') {
        return (
            <Input type={type} className="active" s={12}
                   name={fieldName}
                   error={this.state.errors[fieldName] ? this.state.errors[fieldName] : ''}
                   onChange={this.onChange.bind(this)}
                   onBlur={this.onBlur.bind(this)}
                   label={l10n.fields.bookings[fieldName]}
                   value={this.state.fields[fieldName] ? this.state.fields[fieldName] : ''}/>
        )
    }

    /**
     * Initial state for the form fields and errors
     * @returns {{firstName: string, lastName: string, nbExpected: number, email: string, phone: string, subscribedToNewsletter: boolean, showedUp: boolean, subscribeDate}}
     */
    getEmptyFields() {
        return {
            firstName: '',
            lastName: '',
            nbExpected: '',
            email: '',
            phone: '',
            subscribedToNewsletter: '',
            showedUp: '',
        };
    }

    /**
     * Force Materialize lib to update the text fields, so the labels and fields do not overlap
     */
    updateMaterializeFields() {
        if (Materialize.updateTextFields !== undefined) {
            Materialize.updateTextFields();
        }
    }

    /**
     * After component has been mounted, make sure the Materialize fields are up to date.
     */
    componentDidMount() {
        this.updateMaterializeFields();
    }

    /**
     * After component has been updated, make sure the Materialize fields are up to date.
     */
    componentDidUpdate() {
        this.updateMaterializeFields();
    }

    /**
     * When the component is loading, fetch the bookingId we're supposed to display in the route
     */
    componentWillMount() {
        if (this.props.match.params.bookingId !== undefined) {
            this.props.dispatch(actions.fetchBooking(this.props.match.params.bookingId));
        }

        console.log(this.props.eventItem);
        if (!this.props.eventItem && this.props.match.params.eventId !== undefined) {
            this.props.dispatch(actions.fetchBookingEvent(this.props.match.params.eventId));
        }

    }

    /**
     * Dispatch an even whenever the component is destroyed
     */
    componentWillUnmount() {
        this.props.dispatch(actions.leaveForm());
    }

    /**
     * When receiving new props, update current state to get new field values and errors
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        // Update only if nextProps comes with a valid item, so the form never displays any "null" value
        if (nextProps.item !== undefined && nextProps.item !== null && !utils.objectIsEmpty(nextProps.item)) {
            nextProps.item.subscribeDate = moment().format('DD.MM.YYYY HH:mm');
            nextProps.item.event = this.props.eventItem ? this.props.eventItem.id : 0;
            this.setState({
                venues: nextProps.venues,
                fields: nextProps.item,
                errors: nextProps.errors || this.getEmptyFields()
            });
        }
    }

    getFullName() {
        let fullName = '';
        if (this.state.fields && this.state.fields.lastName && this.state.fields.firstName) {
            fullName = this.state.fields.lastName.toUpperCase() + ' ' + this.state.fields.firstName
        }
        return fullName;
    }

    /**
     * General render function
     * @returns {XML}
     */
    render() {
        return (
            <div>
                {this.props.saveSuccess &&
                    <Redirect to={{
                        pathname: l10n.formatString(routes.BOOKINGS_LIST, this.props.eventItem.id)
                    }}/>
                }
                {this.props.fetching || this.props.fetchingEvent &&
                    <Loader />
                }

                <ConfirmModal title={l10n.delete_booking_title}
                              content={l10n.formatString(l10n.delete_booking_content, this.getFullName())}
                              active={this.props.removeModal}
                              dispatch={this.props.dispatch} cancelAction={actions.cancelRemoveBooking}
                              confirmAction={actions.confirmRemoveBooking}
                              itemId={this.props.item ? this.props.item.id : null}/>

                <FormNavBar
                    title={this.getTitle()}
                    subtitle={this.getSubtitle()}
                    icon="email"
                    showRemoveBtn={!this.isNew()}
                    onValidate={this.onSubmit.bind(this)}
                    onRemove={this.onRemove.bind(this)}
                />

                <form id="booking-form" style={{opacity: this.props.fetching || this.props.fetchingEvent ? 0.3 : 1}}
                      onSubmit={this.onSubmit.bind(this)}>
                    <Row>
                        {this.getTextInput('firstName')}
                        {this.getTextInput('lastName')}
                        {this.getTextInput('nbExpected')}
                        {this.getTextInput('email')}
                        {this.getTextInput('phone')}
                        <input type="hidden" name="subscribeDate" value={this.state.fields.subscribeDate ? this.state.fields.subscribeDate : ''} />
                        <input type="hidden" name="event" value={this.state.fields.event ? this.state.fields.event : 0} />

                    </Row>
                    <Row>
                        <input type="submit" className="hide"/>
                    </Row>
                </form>
            </div>
        )
    }
}

BookingForm.propTypes = propTypes;


export default connect((state) => {
    return Object.assign({}, {
        item: state.bookings.item,
        eventItem: state.bookings.eventItem,
        venues: state.venues.items,
        dispatch: state.bookings.dispatch,
        fetching: state.bookings.fetching,
        fetchingEvent: state.bookings.fetchingEvent,
        errors: state.bookings.formErrors,
        saveSuccess: state.bookings.saveSuccess,
        removeModal: state.bookings.removeModal
    });
})(BookingForm);
