import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom';
import {Row, Input, Button, Icon} from 'react-materialize';
import * as routes from '../../constants/routes';
import Loader from '../utils/Loader';
import validate from 'validate.js';
import eventConstraints from '../../validation/event';
import * as utils from '../../utils/utils';
import FixedNavBar from '../menu/FixedNavBar';

import * as actions from '../../actions/eventsActions';
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
     * Initial state for the form fields and errors
     * @returns {{name: string, capacity: string, address: string, phone: string, website: string, image: string}}
     */
    getEmptyFields() {
        return {
            name: '',
            startDate: '',
            description: '',
            image: '',
            venue: ''
        };
    }

    /**
     * Initialize the state of form fields and errors
     * @param props
     */
    constructor(props) {
        super(props);
        let emptyFields =
            this.state = {
                fields: this.getEmptyFields(),
                errors: this.getEmptyFields(),
            }
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
                fields: nextProps.item,
                errors: nextProps.errors || this.getEmptyFields()
            });
        }
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
            this.props.dispatch(actions.validationError());
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
     * Decides
     * @returns {string}
     */
    getSuccessRedirection() {
        let output = '';
        if (this.props.saveSuccess) {
            return (
                <Redirect to={{
                    pathname: routes.EVENTS_LIST
                }}/>
            );
        }
    }

    /**
     * If form is loading, display the loading spinner
     * @returns {XML}
     */
    getLoader() {
        if (this.props.fetching) {
            return (
                <Loader />
            )
        }
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
     * Returns the markup for the remove button, only if we're editing a record
     * @returns {XML}
     */
    getNavBarRemoveBtn() {
        if (!this.isNew()) {
            return (
                <li>
                    <a className="red waves-effect" href="#" onClick={this.onRemove.bind(this)}>
                        <Icon>delete</Icon>
                    </a>
                </li>
            )
        }
    }

    /**
     * Returns a text input for the given form field
     * @param fieldName
     * @returns {XML}
     */
    getTextInput(fieldName) {
        return (
            <Input className="active" s={12}
                   name={fieldName}
                   error={this.state.errors[fieldName] ? this.state.errors[fieldName] : ''}
                   onChange={this.onChange.bind(this)}
                   onBlur={this.onBlur.bind(this)}
                   label={l10n.fields.events[fieldName]}
                   value={this.state.fields[fieldName]}/>
        )
    }

    /**
     * Returns the form navbar
     * @returns {XML}
     */
    getNavBar() {
        return (
            <FixedNavBar title={this.getTitle()} icon="movie">
                {this.getNavBarRemoveBtn()}
                <li>
                    <a className="blue waves-effect" href="#" onClick={this.onSubmit.bind(this)}>
                        <Icon>done</Icon>
                    </a>
                </li>
            </FixedNavBar>
        )
    }

    /**
     * General render function
     * @returns {XML}
     */
    render() {
        return (
            <div>
                {this.getSuccessRedirection()}
                {this.getLoader()}
                <ConfirmModal title={l10n.delete_event_title}
                              content={l10n.formatString(l10n.delete_event_content, this.props.item.name)}
                              active={this.props.removeModal}
                              dispatch={this.props.dispatch} cancelAction={actions.cancelRemoveEvent}
                              confirmAction={actions.confirmRemoveEvent}
                              itemId={this.props.item.id ? this.props.item.id : null}/>

                {this.getNavBar()}

                <form id="event-form" style={{opacity: this.props.fetching ? 0.3 : 1}}
                      onSubmit={this.onSubmit.bind(this)}>
                    <Row>
                        {this.getTextInput('name')}
                        {this.getTextInput('startDate')}
                        {this.getTextInput('description')}
                        {this.getTextInput('venue')}
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
        dispatch: state.events.dispatch,
        fetching: state.events.fetching,
        errors: state.events.formErrors,
        saveSuccess: state.events.saveSuccess,
        removeModal: state.events.removeModal
    });
})(EventForm);