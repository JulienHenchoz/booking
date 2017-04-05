import React from "react";
import {connect} from "react-redux";
import {HashRouter as Router, Route} from 'react-router-dom';
import MainMenu from "../components/menu/MainMenu";

import VenuesForm from "../components/venues/VenueForm";
import VenuesList from "../components/venues/VenuesList";

import EventsForm from "../components/events/EventsForm";
import EventsList from "../components/events/EventsList";

import * as routes from '../constants/routes';
import l10n from '../l10n/localization';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <MainMenu />
                    <main>
                        <Route path="/" exact={true} component={VenuesList}/>
                        <Route path={routes.VENUES_LIST} exact={true} component={VenuesList}/>
                        <Route path={routes.VENUES_ADD} exact={true} component={VenuesForm}/>
                        <Route path={l10n.formatString(routes.VENUES_EDIT, ':venueId')} component={VenuesForm}/>

                        <Route path={routes.EVENTS_LIST} exact={true} component={EventsList}/>
                        <Route path={routes.EVENTS_ADD} exact={true} component={EventsForm}/>
                        <Route path={l10n.formatString(routes.EVENTS_EDIT, ':eventId')} component={EventsForm}/>
                    </main>

                </div>
            </Router>
        );
    }
}

export default connect()(App);
