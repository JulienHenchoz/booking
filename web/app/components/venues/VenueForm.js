import React, { PropTypes } from "react"
import {connect} from "react-redux"
import {Row, Input} from 'react-materialize';

import * as actions from '../../actions/venuesActions';

export default class VenueForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            id: props.match.params.venueId
        };
    }

    componentWillMount() {
        fetch('/api/venues/get/' + this.state.id)
            .then(response => (response.json())
            .then(json => {
                this.setState(Object.assign({}, {
                    item: json
                }));
            })
        );
    }

    render() {
        let output = '';
        if (this.state.item) {
            output =
            <Row>
                <Input className="active" s={12} label="Name" value={this.state.item.name} />
                <Input className="active" s={12} label="Capacity" value={this.state.item.capacity} />
                <Input className="active" s={12} label="Address" value={this.state.item.address} />
                <Input className="active" s={12} label="phone" value={this.state.item.phone} />
                <Input className="active" s={12} label="website" value={this.state.item.website} />
            </Row>
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

