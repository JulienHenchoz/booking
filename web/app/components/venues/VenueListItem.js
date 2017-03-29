import React, { PropTypes } from "react"
import {connect} from "react-redux"

import * as actions from '../../actions/venuesActions';

export default class VenueListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.capacity}</td>
                <td>{this.props.address}</td>
                <td>{this.props.phone}</td>
                <td>{this.props.website}</td>
            </tr>
        );
    }
}

