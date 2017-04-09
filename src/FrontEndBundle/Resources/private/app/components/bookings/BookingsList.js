import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Collection, Row} from 'react-materialize';
import {CSSTransition, transit} from "react-css-transition";
import Loader from '../utils/Loader'
import Reload from '../utils/Reload'
import l10n from "../../l10n/localization";
import * as routes from '../../constants/routes';
import moment from 'moment';
import HighlightBox from '../utils/HighlightBox';

import * as actions from '../../actions/bookingsActions';

import BookingListItem from './BookingListItem';
import FixedNavBar from '../menu/FixedNavBar';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.string,
    active: PropTypes.bool
};

class BookingsList extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * When the component is loaded, automatically fetch bookings via AJAX
     */
    componentWillMount() {
        let eventId = this.props.match.params.eventId !== undefined ? this.props.match.params.eventId : null;
        if (eventId) {
            this.props.dispatch(actions.fetchBookingEvent(eventId));
            this.props.dispatch(actions.fetchBookings(eventId));
        }
    }

    componentWillUnmount() {
        this.props.dispatch(actions.leaveBookingsList());
    }

    /**
     * Force reload of the current list
     * @param e
     */
    onReload(e) {
        e.preventDefault();
        this.fetchBookings(this.props.currentEvent);
    }

    /**
     * Fetch bookings list via ajax
     */
    fetchBookings() {
        this.props.dispatch(actions.fetchBookings(this.props.currentEvent));
    }

    /**
     * If AJAX returned no data, display a message + a reload button
     * @returns {XML}
     */
    getEmptyMessage() {
        if (this.isListEmpty() && !this.props.fetching) {
            return (
                <Reload onClick={this.onReload.bind(this)} error={l10n.no_bookings}/>
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

    getOccupancyClass() {
        if (this.props.eventItem.occupancyRate === 2) {
            return 'red-text';
        }
        else if (this.props.eventItem.occupancyRate === 1) {
            return 'orange-text';
        }
        else {
            return 'green-text';
        }
    }

    getProgressBarClass() {
        if (this.props.eventItem.occupancyRate === 2) {
            return 'green';
        }
        else if (this.props.eventItem.occupancyRate === 1) {
            return 'orange';
        }
        else {
            return 'red';
        }
    }

    /**
     * General render method. Builds the list of bookings to display
     * @returns {XML}
     */
    render() {
        // Display the list
        const itemList = this.props.items.map(function (booking) {
            return (<BookingListItem editLink={true} key={booking.id} {...booking} />);
        });
        let body = '';
        if (itemList.length) {
            body = (
                <div>
                    {itemList.length &&
                    <Collection>
                        {itemList}
                    </Collection>
                    }
                </div>
            );
        }

        return (
            <div className="bookings-page">
                <FixedNavBar
                    title={l10n.bookings_title}
                    showAddBtn={true}
                    addRoute={l10n.formatString(routes.BOOKINGS_ADD, this.props.eventItem ? this.props.eventItem.id : '')}/>

                {!this.props.fetchingEvent && this.props.eventItem &&
                <div>
                    <h1>
                        {this.props.eventItem.name}
                        <small className="right">
                            {moment(this.props.eventItem.startDate).format('D MMM YYYY')}
                        </small>
                    </h1>

                    <div className="progress grey lighten-3">
                        <div className={"determinate " + this.getProgressBarClass()}
                             style={{width: this.props.fetching ? 0 : this.props.eventItem.occupancyPercentage + "%"}}></div>
                    </div>

                    <Row>
                        <HighlightBox value={this.props.eventItem.bookingsCount} label={l10n.highlight_bookings} />
                        <HighlightBox value={this.props.eventItem.peopleCount} label={l10n.highlight_people} />
                        <HighlightBox colorClassName={this.getOccupancyClass()} value={this.props.eventItem.seatsLeft} label={l10n.hightlight_seats_left} />
                    </Row>
                </div>
                }

                {this.props.fetching &&
                <Loader />
                }

                {this.props.error && !this.props.fetching &&
                <Reload onClick={this.onReload.bind(this)} error={this.props.error}/>
                }

                {!this.props.fetching && this.props.items.length === 0 && !this.props.error &&
                <Reload onClick={this.onReload.bind(this)} error={l10n.no_bookings}/>
                }

                {!this.props.fetching && !this.props.error &&
                body
                }
            </div>
        )
    }
}

BookingsList.propTypes = propTypes;

export default connect((state) => {
    return Object.assign({},
        state.bookings);
})(BookingsList);
