import React from "react"
import {connect} from "react-redux"

import MainMenu from "../components/MainMenu"
import VenuesList from "../components/venues/VenuesList";

class App extends React.Component {
    render() {
        return (
            <div>
                <VenuesList />
            </div>
        );
    }
}

export default connect()(App);
