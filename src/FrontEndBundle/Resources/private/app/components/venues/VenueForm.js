import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Redirect} from 'react-router-dom';
import {Row, Input, Button, Icon} from 'react-materialize';

import Loader from '../utils/Loader';

import * as utils from '../../utils/utils';
import FixedNavBar from '../menu/FixedNavBar';

import * as actions from '../../actions/venuesActions';
import ConfirmModal from "../utils/ConfirmModal";
import l10n from "../../l10n/localization";


const propTypes = {
    dispatch: PropTypes.func.isRequired,
    item: PropTypes.object,
    fetching: PropTypes.bool,
    errors: PropTypes.array
};

class VenueForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            capacity: 0,
            address: '',
            phone: '',
            website: '',
            image: ''
        }
    }

    componentWillMount() {
        if (this.props.match.params.venueId !== undefined) {
            this.props.dispatch(actions.fetchVenue(this.props.match.params.venueId));
        }
    }

    componentDidMount() {
        if (Materialize.updateTextFields !== undefined) {
            Materialize.updateTextFields();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.item !== undefined && nextProps.item !== null) {
            this.setState(nextProps.item);
        }
    }

    componentDidUpdate() {
        if (Materialize.updateTextFields !== undefined) {
            Materialize.updateTextFields();
        }
    }

    componentWillUnmount() {
        this.props.dispatch(actions.leaveForm());
    }

    onSubmit(e) {
        e.preventDefault();
        let item = this.props.item;

        if (item.id !== undefined) {
            // If submitted item already has an ID, send an edit action
            this.props.dispatch(actions.updateVenue(item.id, document.getElementById('venue-form')));
        }
        else {
            // Else send an Add action
            this.props.dispatch(actions.addVenue(document.getElementById('venue-form')));
        }
    }

    onRemove(e) {
        e.preventDefault();
        this.props.dispatch(actions.removeVenue(this.props.item.id));
    }

    onChange(e) {
        let newState = Object.assign({}, this.state);
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        this.props.dispatch(actions.editVenue(e.target.name, e.target.value));
    }

    render() {
        if (this.props.saveSuccess) {
            return (
                <Redirect to={{
                    pathname: '/venues/'
                }}/>
            );
        }

        let loading = '';
        if (this.props.fetching) {
            loading = <Loader />;
        }

        let header = '';
        let removeBtn = '';
        if (this.props.item.id !== undefined) {
            header = 'Edition de "' + this.props.item.name + '"';
            removeBtn = (
                <li>
                    <a className="red waves-effect" href="#" onClick={this.onRemove.bind(this)}>
                        <Icon>delete</Icon>
                    </a>
                </li>
            );
        }
        else {
            header = l10n.new_venue;
        }

        return (
            <div>
                {loading}
                <ConfirmModal title={l10n.delete_venue_title} content={l10n.formatString(l10n.delete_venue_content, this.props.item.name)} active={this.props.removeModal}
                              dispatch={this.props.dispatch} cancelAction={actions.cancelRemoveVenue}
                              confirmAction={actions.confirmRemoveVenue} itemId={this.props.item.id ? this.props.item.id : null} />

                <FixedNavBar title={header} icon="business">
                    {removeBtn}
                    <li>
                        <a className="blue waves-effect" href="#" onClick={this.onSubmit.bind(this)}>
                            <Icon>done</Icon>
                        </a>
                    </li>
                </FixedNavBar>
                <form id="venue-form" style={{opacity: this.props.fetching ? 0.3 : 1}} onSubmit={this.onSubmit.bind(this)}>
                    <Row>
                        <Input className={this.state.name ? 'active' : ''} s={12} name="name" error={this.props.errors.name}
                               onChange={this.onChange.bind(this)} label="Name" value={this.state.name}/>
                        <Input className="active" s={12} name="capacity" error={this.props.errors.capacity}
                               onChange={this.onChange.bind(this)} label="Capacity" value={this.state.capacity}/>
                        <Input className="active" s={12} name="address" error={this.props.errors.address}
                               onChange={this.onChange.bind(this)} label="Address" value={this.state.address}/>
                        <Input className="active" s={12} name="phone" error={this.props.errors.phone}
                               onChange={this.onChange.bind(this)} label="Phone" value={this.state.phone}/>
                        <Input className="active" s={12} name="website" error={this.props.errors.website}
                               onChange={this.onChange.bind(this)} label="website" value={this.state.website}/>
                        <Input className="active" s={12} name="image" error={this.props.errors.image}
                               onChange={this.onChange.bind(this)} label="Image URL" value={this.state.image}/>
                    </Row>
                    <Row>
                        <input type="submit" className="hide"/>
                    </Row>
                </form>
            </div>
        )
    }
}

VenueForm.propTypes = propTypes;

export default connect((state) => {
    return Object.assign({}, {
        item: state.venues.item,
        dispatch: state.venues.dispatch,
        fetching: state.venues.fetching,
        errors: state.venues.formErrors,
        saveSuccess: state.venues.saveSuccess,
        removeModal: state.venues.removeModal
    });
})(VenueForm);
