import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom';
import {Row, Input} from 'react-materialize';
import * as routes from '../../constants/routes';
import Loader from '../utils/Loader';
import validate from 'validate.js';
import eventConstraints from '../../validation/event';
import * as utils from '../../utils/utils';
import FormNavBar from '../menu/FormNavBar';

import moment from 'moment';
import DateTime from '../fields/DateTime';
import * as actions from '../../actions/eventsActions';
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

class EventForm extends React.Component {
    /**
     * Initialize the state of form fields and errors
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {
            dateTimeFormat: 'DD.MM.YYYY HH:mm',
            defaultDateTime: moment({hour: 20}),
        };
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
            eventConstraints,
            {fullMessages: false}
        );

        if (!validationErrors) {
            // If validation is OK, decide whether to update or add the current item
            if (item.id !== undefined) {
                // If submitted item already has an ID, send an edit action
                this.props.dispatch(actions.updateEvent(item.id, document.getElementById('event-form')));
            }
            else {
                // Else send an Add action
                this.props.dispatch(actions.addEvent(document.getElementById('event-form')));
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
        this.props.dispatch(actions.removeEvent(this.props.item.id));
    }

    /**
     * Dispatch an action when a field is changed, to update the global state
     * @param e
     */
    onChange(e) {
        let newState = Object.assign({}, this.state);
        newState.fields[e.target.name] = e.target.value;
        this.setState(newState);
        this.props.dispatch(actions.editEvent(e.target.name, e.target.value));
    }

    onVenueSelectChange(e) {
        let venueId = e.target.value;
        let venue = this.props.venues.filter(function (venue) {
            return venue.id == venueId;
        });
        if (venue.length) {
            this.onChange({
               target: {
                   name: 'venue',
                   value: venue[0],
               }
            });
        }
    }

    /**
     * Update the start date
     * @param newDate
     */
    onStartDateChange(newDate) {
        let fieldName = 'startDate';
        let newState = Object.assign({}, this.state);
        newState.fields[fieldName] = newDate;
        this.setState(newState);
        this.props.dispatch(actions.editEvent(fieldName, newDate));
    }

    /**
     * Validate single fields every time we focus out of them
     * @param e
     */
    onBlur(e) {
        // Empty string will be seen as validation error, so empty values must be null for validation
        let value = e.target.value ? e.target.value : null;
        let newState = Object.assign({}, this.state);
        let errors = validate.single(value, eventConstraints[e.target.name]);
        this.state.errors[e.target.name] = errors && errors.length ? errors[0] : '';
        this.setState(newState);
    }

    /**
     * Returns true if the current form is creating a new record, false if we're editing
     * @returns {boolean}
     */
    isNew() {
        return this.props.item.id === undefined;
    }

    /**
     * Returns the title that should be used in the navbar.
     * If we're currently fetching something, title should be empty.
     * @returns {string}
     */
    getTitle() {
        let header = '';
        if (!this.isNew()) {
            header = l10n.formatString(l10n.editing, this.state.fields.name);
        }
        else if (!this.props.fetching) {
            header = l10n.new_event;
        }
        return header;
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
                   label={l10n.fields.events[fieldName]}
                   value={this.state.fields[fieldName] ? this.state.fields[fieldName] : ''}/>
        )
    }

    getVenueSelect() {
        // Display the list
        if (this.props.venues !== undefined) {
            const itemList = this.props.venues.map(function (venue) {
                return (<option key={venue.id} value={venue.id}>{venue.name}</option>);
            });

            return (
                <Input
                    s={12}
                    type='select'
                    name="venue"
                    error={this.state.errors['venue.id'] ? this.state.errors['venue.id'] : ''}
                    value={this.state.fields.venue ? this.state.fields.venue.id : ''}
                    onChange={this.onVenueSelectChange.bind(this)}
                    label={l10n.fields.events.venue}>
                    <option value="" disabled>{l10n.venue_select_default}</option>
                    {itemList}
                </Input>
            );
        }
    }

    /**
     * Initial state for the form fields and errors
     * @returns {{name: string, capacity: string, address: string, phone: string, website: string, image: string}}
     */
    getEmptyFields() {
        return {
            name: '',
            startDate: moment({hour: 20}),
            description: '',
            image: '',
            venue: ''
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
     * When the component is loading, fetch the eventId we're supposed to display in the route
     */
    componentWillMount() {
        if (this.props.match.params.eventId !== undefined) {
            this.props.dispatch(actions.fetchEvent(this.props.match.params.eventId));
        }

        // If we don't have any loaded venues, fetch them to populate our venues list
        if (this.props.venues === undefined || this.props.venues.length === 0) {
            this.props.dispatch(venuesActions.fetchVenues());
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
            this.setState({
                venues: nextProps.venues,
                fields: nextProps.item,
                errors: nextProps.errors || this.getEmptyFields()
            });
        }
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
                        pathname: routes.EVENTS_LIST
                    }}/>
                }
                {this.props.fetching &&
                    <Loader />
                }

                <ConfirmModal title={l10n.delete_event_title}
                              content={l10n.formatString(l10n.delete_event_content, this.props.item.name)}
                              active={this.props.removeModal}
                              dispatch={this.props.dispatch} cancelAction={actions.cancelRemoveEvent}
                              confirmAction={actions.confirmRemoveEvent}
                              itemId={this.props.item.id ? this.props.item.id : null}/>

                <FormNavBar
                    title={this.getTitle()}
                    icon="event"
                    showRemoveBtn={!this.isNew()}
                    onValidate={this.onSubmit.bind(this)}
                    onRemove={this.onRemove.bind(this)}
                />

                <form id="event-form" style={{opacity: this.props.fetching ? 0.3 : 1}}
                      onSubmit={this.onSubmit.bind(this)}>
                    <Row>
                        {this.getTextInput('name')}
                        {this.getVenueSelect()}

                        <DateTime
                            fieldName="startDate"
                            value={this.state.fields.startDate ? this.state.fields.startDate : this.state.defaultDateTime}
                            onChange={this.onStartDateChange.bind(this)}
                            error={this.state.errors.startDate}
                            label={l10n.fields.events.startDate}
                        />

                        {this.getTextInput('description', 'textarea')}
                        {this.getTextInput('image')}
                    </Row>
                    <Row>
                        <input type="submit" className="hide"/>
                    </Row>
                </form>
            </div>
        )
    }
}

EventForm.propTypes = propTypes;


export default connect((state) => {
    return Object.assign({}, {
        item: state.events.item,
        venues: state.venues.items,
        dispatch: state.events.dispatch,
        fetching: state.events.fetching || state.venues.fetching,
        errors: state.events.formErrors,
        saveSuccess: state.events.saveSuccess,
        removeModal: state.events.removeModal
    });
})(EventForm);
