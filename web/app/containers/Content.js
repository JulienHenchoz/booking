import React from "react"
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from "react-redux"

import MainMenu from "../components/MainMenu";
import VenueList from "../components/venues/VenuesList";
import VenueForm from "../components/venues/VenueForm";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact={true} component={VenueList} />
                    <Route path="/venue/:venueId" component={VenueForm} />
                </div>
            </Router>
        );
    }
}

export default connect()(App);
