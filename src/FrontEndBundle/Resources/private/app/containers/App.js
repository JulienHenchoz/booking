import React from "react";
import {connect} from "react-redux";
import { HashRouter as Router, Route } from 'react-router-dom';
import MainMenu from "../components/menu/MainMenu";
import VenueForm from "../components/venues/VenueForm";
import VenueList from "../components/venues/VenuesList";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                <MainMenu />
                <main>
                    <Route path="/" exact={true} component={VenueList} />
                    <Route path="/venues/" exact={true} component={VenueList} />
                    <Route path="/venues/add/" exact={true} component={VenueForm} />
                    <Route path="/venues/show/:venueId" component={VenueForm} />
                </main>
                </div>
            </Router>
        );
    }
}

export default connect()(App);
