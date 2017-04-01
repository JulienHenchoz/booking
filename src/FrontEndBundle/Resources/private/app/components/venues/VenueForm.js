import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Row, Input, Button, Icon} from 'react-materialize';

import Loader from '../utils/Loader';

import * as utils from '../../utils/utils';
import FixedNavBar from '../menu/FixedNavBar';

import * as actions from '../../actions/venuesActions';


const propTypes = {
    dispatch: PropTypes.func.isRequired,
    item: PropTypes.object,
    fetching: PropTypes.bool,
    errors: PropTypes.array
};

class VenueForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.match.params.venueId !== undefined) {
            this.props.dispatch(actions.fetchVenue(this.props.match.params.venueId));
        }
    }

    componentWillUnmount() {
        console.log("Ha");
        this.props.dispatch(actions.leaveForm());
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.dispatch(actions.updateVenue(this.props.item.id, document.getElementById('venue-form')));
    }

    onChange(e) {
        this.props.dispatch(actions.editVenue(e.target.name, e.target.value));
    }

    render() {

        if (this.props.fetching) {
            return (
                <Loader />
            )
        }

        let header = '';
        if (this.props.item.id !== undefined) {
            header = 'Edition de "' + this.props.item.name + '"';
        }
        else {
            header = 'Nouvelle salle'
        }

        let output =
            <div>
                <FixedNavBar title={header} icon="business" />
                <form id="venue-form">
                    <Row>
                        <Input className="active" s={12} name="name" error={this.props.errors.name}
                               onChange={this.onChange.bind(this)} label="Name" defaultValue={this.props.item.name}/>
                        <Input className="active" s={12} name="capacity" error={this.props.errors.capacity}
                               onChange={this.onChange.bind(this)} label="Capacity" defaultValue={this.props.item.capacity}/>
                        <Input className="active" s={12} name="address" error={this.props.errors.address}
                               onChange={this.onChange.bind(this)} label="Address" defaultValue={this.props.item.address}/>
                        <Input className="active" s={12} name="phone" error={this.props.errors.phone}
                               onChange={this.onChange.bind(this)} label="Phone" defaultValue={this.props.item.phone}/>
                        <Input className="active" s={12} name="website" error={this.props.errors.website}
                               onChange={this.onChange.bind(this)} label="website" defaultValue={this.props.item.website}/>
                    </Row>
                    <Row>
                        <Button className="btn btn-large right" type="submit" onClick={this.onSubmit.bind(this)}>
                            <Icon className="left">done</Icon>
                            Enregistrer
                        </Button>
                    </Row>
                </form>
            </div>

        return (
            <div>
                {output}
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
        errors: state.venues.formErrors
    });
})(VenueForm);
