import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Collection, Icon, Button, Row, Col} from 'react-materialize';
import {CSSTransition, transit} from "react-css-transition";
import Loader from '../utils/Loader'
import {Link} from 'react-router-dom';

import * as actions from '../../actions/venuesActions';

import VenueListItem from './VenueListItem';
import FixedNavBar from '../menu/FixedNavBar';

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
    }

    componentWillMount() {
        this.props.dispatch(actions.fetchVenues());
    }

    render() {
        if (this.props.fetching) {
            return (
                <Loader />
            )
        }

        const itemList = this.props.items.map(function (venue) {
            return (<VenueListItem key={venue.id} {...venue} />);
        });

        return (
            <div>
                <FixedNavBar title="Salles">
                    <li>
                        <Link to="/venues/add/"><Icon>add</Icon></Link>
                    </li>
                </FixedNavBar>
                <Collection>
                    {itemList}
                </Collection>
            </div>
        )
    }
}

VenuesList.propTypes = propTypes;

export default connect((state) => {
    return Object.assign({},
        state.venues);
})(VenuesList);
