import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Collection, Icon, Button, Row, Col} from 'react-materialize';
import {CSSTransition, transit} from "react-css-transition";
import Loader from '../utils/Loader'
import Reload from '../utils/Reload'
import {Link} from 'react-router-dom';
import l10n from "../../l10n/localization";
import * as routes from '../../constants/routes';

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
        this.state = {};
    }

    componentWillMount() {
        this.state.finishedRefresh = false;
        this.fetchVenues();
    }

    onReload(e) {
        e.preventDefault();
        this.fetchVenues();
    }

    fetchVenues() {
        this.props.dispatch(actions.fetchVenues());
    }


    /**
     * When receiving new props, update current state to get new field values and errors
     * @param nextProps
     */
    componentWillReceiveProps(nextProps) {
        this.state.finishedRefresh = true;
    }


    render() {
        // Display the list
        let itemList = this.props.items.map(function (venue) {
            return (<VenueListItem key={venue.id} {...venue} />);
        });
        let body = (
            <Collection>
                {itemList}
            </Collection>

        );

        return (
            <div>
                <FixedNavBar title={l10n.venues_title} showAddBtn={true} addRoute={routes.VENUES_ADD}/>

                {this.props.fetching &&

                <Loader />
                }

                {this.props.error && !this.prop.fetching &&
                <Reload onClick={this.fetchVenues.bind(this)} error={this.props.error}/>
                }

                {!this.props.fetching && this.state.finishedRefresh && !this.props.error &&
                body
                }
            </div>
        )
    }
}

VenuesList.propTypes = propTypes;

export default connect((state) => {
    return Object.assign({},
        state.venues);
})(VenuesList);
