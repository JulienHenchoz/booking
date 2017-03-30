import React, { PropTypes } from "react"
import {connect} from "react-redux"
import {CollectionItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';

import * as actions from '../../actions/venuesActions';

export default class VenueListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={'/venue/' + this.props.id} className="collection-item" href="#">
                {this.props.name}
            </Link>
        );
    }
}

