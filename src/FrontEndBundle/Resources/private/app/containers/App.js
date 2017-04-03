import React from "react";
import {connect} from "react-redux";
import {HashRouter as Router, Route} from 'react-router-dom';
import MainMenu from "../components/menu/MainMenu";
import VenueForm from "../components/venues/VenueForm";
import VenueList from "../components/venues/VenuesList";
import * as routes from '../constants/routes';
import l10n from '../l10n/localization';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <MainMenu />
                    <main>
                        <Route path="/" exact={true} component={VenueList}/>
                        <Route path={routes.VENUES_LIST} exact={true} component={VenueList}/>
                        <Route path={routes.VENUES_ADD} exact={true} component={VenueForm}/>
                        <Route path={l10n.formatString(routes.VENUES_EDIT, ':venueId')} component={VenueForm}/>
                    </main>

                </div>
            </Router>
        );
    }
}

export default connect()(App);
