import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Collection, Icon, Button, Row, Col} from 'react-materialize';
import {CSSTransition, transit} from "react-css-transition";
import Loader from '../utils/Loader'
import Reload from '../utils/Reload'
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
        this.fetchVenues();
    }

    onReload(e) {
        e.preventDefault();
        this.fetchVenues();
    }

    fetchVenues() {
        this.props.dispatch(actions.fetchVenues());
    }


    render() {
        let header = (
            <FixedNavBar title="Salles">
                <li>
                    <Link className="blue waves-effect" to="/venues/add/"><Icon>add</Icon></Link>
                </li>
            </FixedNavBar>
        );

        let body = '';
        if (this.props.fetching) {
            // If we're currently loading the list, display the loader in the content
            body = <Loader />
        }
        else if (this.props.error) {
            body = <Reload onClick={this.fetchVenues.bind(this)} error={this.props.error} />
        }
        else {
            // Display the list
            const itemList = this.props.items.map(function (venue) {
                return (<VenueListItem key={venue.id} {...venue} />);
            });
            body = (
                <Collection>
                    {itemList}
                </Collection>
            )
        }

        return (
            <div>
                {header}
                {body}
            </div>
        )
    }
}

VenuesList.propTypes = propTypes;

export default connect((state) => {
    return Object.assign({},
        state.venues);
})(VenuesList);
