import React from "react";
import {connect} from "react-redux";
import {HashRouter as Router, Route} from 'react-router-dom';
import MainMenu from "../components/menu/MainMenu";
import moment from "moment";

import VenuesForm from "../components/venues/VenueForm";
import VenuesList from "../components/venues/VenuesList";

import EventsForm from "../components/events/EventsForm";
import EventsList from "../components/events/EventsList";
import Dashboard from "../components/dashboard/Dashboard";
import PastEventsList from "../components/events/PastEventsList";

import BookingsList from "../components/bookings/BookingsList";
import BookingsForm from "../components/bookings/BookingsForm";


import * as routes from '../constants/routes';
import l10n from '../l10n/localization';
import {Redirect} from 'react-router-dom';

const RedirectToDashboard = () => {
    return (
        <Redirect to={{
            pathname: routes.DASHBOARD
        }}

        />
    );
};



class App extends React.Component {
    render() {
        moment.locale('fr');
        return (
            <Router>
                <div>
                    <MainMenu />
                    <main>

                        <Route path="/" exact={true} component={RedirectToDashboard}/>
                        <Route path={routes.DASHBOARD} exact={true} component={Dashboard}/>
                        <Route path={routes.VENUES_LIST} exact={true} component={VenuesList}/>
                        <Route path={routes.VENUES_ADD} exact={true} component={VenuesForm}/>
                        <Route path={l10n.formatString(routes.VENUES_EDIT, ':venueId')} component={VenuesForm}/>

                        <Route path={routes.EVENTS_LIST} exact={true} component={EventsList}/>
                        <Route path={routes.EVENTS_LIST_PAST} exact={true} component={PastEventsList}/>
                        <Route path={routes.EVENTS_ADD} exact={true} component={EventsForm}/>
                        <Route path={l10n.formatString(routes.EVENTS_EDIT, ':eventId')} component={EventsForm}/>

                        <Route exact={true} path={l10n.formatString(routes.BOOKINGS_LIST, ':eventId')}
                               component={BookingsList}/>
                        <Route exact={true} path={l10n.formatString(routes.BOOKINGS_ADD, ':eventId')}
                               component={BookingsForm}/>
                        <Route exact={true} path={l10n.formatString(routes.BOOKINGS_EDIT, ':eventId', ':bookingId')}
                               component={BookingsForm}/>
                    </main>

                </div>
            </Router>
        );
    }
}

export default connect()(App);
