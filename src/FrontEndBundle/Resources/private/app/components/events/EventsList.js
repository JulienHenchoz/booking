import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Collection, Icon, Button, Row, Col} from 'react-materialize';
import {CSSTransition, transit} from "react-css-transition";
import Loader from '../utils/Loader'
import Reload from '../utils/Reload'
import {Link} from 'react-router-dom';
import l10n from "../../l10n/localization";
import * as routes from '../../constants/routes';


import * as actions from '../../actions/eventsActions';

import EventListItem from './EventListItem';
import FixedNavBar from '../menu/FixedNavBar';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.string,
    active: PropTypes.bool
};

class EventsList extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * When the component is loaded, automatically fetch events via AJAX
     */
    componentWillMount() {
        this.fetchEvents();
    }

    /**
     * Force reload of the current list
     * @param e
     */
    onReload(e) {
        e.preventDefault();
        this.fetchEvents();
    }

    /**
     * Fetch events list via ajax
     */
    fetchEvents() {
        this.props.dispatch(actions.fetchEvents());
    }

    /**
     * If AJAX returned no data, display a message + a reload button
     * @returns {XML}
     */
    getEmptyMessage() {
        if (this.isListEmpty() && !this.props.fetching) {
            return (
                <Reload onClick={this.onReload.bind(this)} error={l10n.no_events} />
            );
        }
    }

    /**
     * Returns true if the items list is empty or undefined, else false
     * @returns {boolean}
     */
    isListEmpty() {
        return (this.props.items === undefined
        || this.props.items === null
        || this.props.items.length === 0);
    }

    /**
     * Display the loading spinner if we're currently loading the list
     * @returns {XML}
     */
    getLoader() {
        if (this.props.fetching) {
            return <Loader />;
        }
    }

    /**
     * If we're done loading and there has been an error, display it along with a reload button
     * @returns {XML}
     */
    getError() {
        if (!this.props.fetching && this.props.error) {
            return <Reload onClick={this.fetchEvents.bind(this)} error={this.props.error} />
        }
    }

    /**
     * Returns the list's navbar
     * @returns {XML}
     */
    getNavBar() {
        return (
            <FixedNavBar title={l10n.events_title}>
                <li>
                    <Link className="blue waves-effect" to={routes.EVENTS_ADD}>
                        <Icon>add</Icon>
                    </Link>
                </li>
            </FixedNavBar>
        );
    }

    /**
     * General render method. Builds the list of events to display
     * @returns {XML}
     */
    render() {
        // Display the list
        const itemList = this.props.items.map(function (event) {
            return (<EventListItem key={event.id} {...event} />);
        });

        return (
            <div>
                {this.getNavBar()}
                {this.getEmptyMessage()}
                {this.getLoader()}
                {this.getError()}

                <Collection>
                    {itemList}
                </Collection>
            </div>
        )
    }
}

EventsList.propTypes = propTypes;

export default connect((state) => {
    return Object.assign({},
        state.events);
})(EventsList);
