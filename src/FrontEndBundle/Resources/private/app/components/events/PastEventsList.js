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

class PastEventsList extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * When the component is loaded, automatically fetch events via AJAX
     */
    componentWillMount() {
        this.fetchPastEvents();
    }

    /**
     * Force reload of the current list
     * @param e
     */
    onReload(e) {
        e.preventDefault();
        this.fetchPastEvents();
    }

    /**
     * Fetch events list via ajax
     */
    fetchPastEvents() {
        this.props.dispatch(actions.fetchPastEvents());
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
        return (this.props.pastItems === undefined
        || this.props.pastItems === null
        || this.props.pastItems.length === 0);
    }

    /**
     * General render method. Builds the list of events to display
     * @returns {XML}
     */
    render() {
        // Display the list
        const itemList = this.props.pastItems.map(function (event) {
            return (<EventListItem editLink={true} key={event.id} {...event} />);
        });
        let body = (
            <Collection>
                {itemList}
            </Collection>
        );

        return (
            <div>
                <FixedNavBar title={l10n.past_events_title} showAddBtn={false} />

                {this.props.fetching &&
                    <Loader />
                }

                {this.props.error && !this.prop.fetching &&
                    <Reload onClick={this.fetchPastEvents.bind(this)} error={this.props.error} />
                }

                {!this.props.fetching && !this.props.error &&
                body
                }
            </div>
        )
    }
}

PastEventsList.propTypes = propTypes;

export default connect((state) => {
    return Object.assign({},
        state.events);
})(PastEventsList);
