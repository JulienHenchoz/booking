import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Collection, Icon, Button, Row, Col} from 'react-materialize';
import {CSSTransition, transit} from "react-css-transition";
import Loader from '../utils/Loader'
import Reload from '../utils/Reload'
import {Link} from 'react-router-dom';
import l10n from "../../l10n/localization";
import * as routes from '../../constants/routes';


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
        this.fetchBookings();
    }

    /**
     * Force reload of the current list
     * @param e
     */
    onReload(e) {
        e.prbookingDefault();
        this.fetchBookings();
    }

    /**
     * Fetch bookings list via ajax
     */
    fetchBookings() {
        this.props.dispatch(actions.fetchBookings());
    }

    /**
     * If AJAX returned no data, display a message + a reload button
     * @returns {XML}
     */
    getEmptyMessage() {
        if (this.isListEmpty() && !this.props.fetching) {
            return (
                <Reload onClick={this.onReload.bind(this)} error={l10n.no_bookings} />
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
     * General render method. Builds the list of bookings to display
     * @returns {XML}
     */
    render() {
        // Display the list
        const itemList = this.props.items.map(function (booking) {
            return (<BookingListItem editLink={true} key={booking.id} {...booking} />);
        });
        let body = (
            <Collection>
                {itemList}
            </Collection>
        );

        return (
            <div>
                <FixedNavBar title={l10n.incoming_bookings_title} showAddBtn={true} addRoute={routes.BOOKINGS_ADD} />

                {this.props.fetching &&
                    <Loader />
                }

                {this.props.error && !this.props.fetching &&
                    <Reload onClick={this.onReload.bind(this)} error={this.props.error} />
                }

                {!this.props.fetching && this.props.items.length === 0 && !this.props.error &&
                    <Reload onClick={this.onReload.bind(this)} error={l10n.no_bookings} />
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
