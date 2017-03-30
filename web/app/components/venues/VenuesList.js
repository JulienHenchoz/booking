import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Collection, Icon} from 'react-materialize';
import {CSSTransition, transit} from "react-css-transition";

import * as actions from '../../actions/venuesActions';

import VenueListItem from './VenueListItem';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.string,
    active: PropTypes.bool
};

class VenuesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        };
    }

    componentWillMount() {
        this.props.dispatch(actions.fetchVenues());
    }

    render() {
        let items = [];

        this.props.items.forEach(function (venue) {
            items.push(<VenueListItem key={venue.id} {...venue} />);
        });

        return (
            <div>
                <h3><Icon className="small">location_on</Icon> Liste des salles</h3>
                <Collection>
                    {items}
                </Collection>
            </div>
        )
    }
}

VenuesList.propTypes = propTypes;

export default connect((store) => {
    return Object.assign({}, store.venues);
})(VenuesList);
