import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Row, Input, Button, Col} from 'react-materialize';

import Loader from '../utils/Loader';

import * as utils from '../../utils/utils';

import * as actions from '../../actions/venuesActions';


const propTypes = {
    dispatch: PropTypes.func.isRequired,
    item: PropTypes.object,
    fetching: PropTypes.bool
};

class VenueForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(actions.fetchVenue(this.props.match.params.venueId));
    }

    onSubmit(e) {
        e.preventDefault();
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

        let output = '';
        if (!utils.objectIsEmpty(this.props.item)) {
            output =
                <form>
                    <Row>
                        <Input className="active" s={12} name="name" onChange={this.onChange.bind(this)} label="Name" defaultValue={this.props.item.name}/>
                        <Input className="active" s={12} name="capacity" onChange={this.onChange.bind(this)} label="Capacity" defaultValue={this.props.item.capacity}/>
                        <Input className="active" s={12} name="address" onChange={this.onChange.bind(this)} label="Address" defaultValue={this.props.item.address}/>
                        <Input className="active" s={12} name="phone" onChange={this.onChange.bind(this)} label="Phone" defaultValue={this.props.item.phone}/>
                        <Input className="active" s={12} name="website" onChange={this.onChange.bind(this)} label="website" defaultValue={this.props.item.website}/>
                    </Row>
                    <Row>
                        <Button className="col s10 offset-s1 btn-large" onClick={this.onSubmit}>Enregistrer</Button>
                    </Row>
                </form>
        }
        else {
            output = 'Invalid venue';
        }

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
        fetching: state.venues.fetching
    });
})(VenueForm);
