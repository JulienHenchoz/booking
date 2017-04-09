import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Collection, Icon, Button, Row, Col} from 'react-materialize';
import {CSSTransition, transit} from "react-css-transition";
import Loader from '../utils/Loader'
import Reload from '../utils/Reload'
import {Link} from 'react-router-dom';
import l10n from "../../l10n/localization";
import * as routes from '../../constants/routes';
import moment from 'moment';
import FixedNavBar from '../menu/FixedNavBar';
import HighlightBox from '../utils/HighlightBox';
import * as actions from '../../actions/dashboardActions';
import BookingListItem from './BookingListItem';
import { Circle } from 'react-percentage-circle';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.string,
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * When the component is loaded, automatically fetch events via AJAX
     */
    componentWillMount() {
        this.props.dispatch(actions.fetchDashboard());
    }

    onReload(e) {
        e.preventDefault();
        actions.fetchDashboard();
    }

    render() {
        let latestBookings = '';

        if (this.props.data && this.props.data.latestBookings) {
            // Display the list
            const itemList = this.props.data.latestBookings.map(function (booking) {
                return (<BookingListItem editLink={false} key={booking.id} {...booking} />);
            });
            if (itemList.length) {
                latestBookings = (
                    <div>
                        {itemList.length &&
                        <Collection>
                            {itemList}
                        </Collection>
                        }
                    </div>
                );
            }
        }

        return (
            <div className="dashboard">
                <FixedNavBar
                    title={l10n.dashboard}
                    showAddBtn={false}/>

                {this.props.fetching &&
                <Loader/>
                }

                {this.props.error && !this.props.fetching &&
                <Reload onClick={this.onReload.bind(this)} error={this.props.error}/>
                }

                {!this.props.fetching && !this.props.error && this.props.data &&
                <div>
                    <Row>

                        <HighlightBox
                            icon="event"
                            colSize={6}
                            className="blue lighten-1 white-text"
                            value={this.props.data.incomingEvents ? this.props.data.incomingEvents : 0}
                            label={l10n.dashboard_incoming_events}
                        />
                        <HighlightBox
                            icon="email"
                            colSize={6}
                            className="red lighten-1 white-text"
                            value={this.props.data.totalBookings}
                            label={l10n.dashboard_total_bookings}
                        />
                        <HighlightBox
                            icon="group"
                            colSize={6}
                            className="green lighten-1 white-text"
                            value={this.props.data.totalPersons}
                            label={l10n.dashboard_expected_people}
                        />
                        <HighlightBox
                            className="orange lighten-1 white-text"
                            icon="trending_up"
                            colSize={6}
                            value={this.props.data.averageFillingPercentage}
                            suffix="%"
                            label={l10n.dashboard_average_filling}
                        />
                    </Row>

                    {latestBookings &&
                    <div>
                        <Row>
                            <Col s={12}>
                                <h3>{l10n.dashboard_latest_bookings}</h3>
                            </Col>
                            {latestBookings}

                        </Row>
                    </div>
                    }
                </div>
                }

            </div>
        );
    }
}

Dashboard.propTypes = propTypes;

export default connect((state) => {
    return Object.assign({},
        state.dashboard);
})(Dashboard);
