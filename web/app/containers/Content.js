import React from "react"
import {connect} from "react-redux"

import MainMenu from "../components/MainMenu";
import VenuePage from "../components/venues/VenuePage";

class App extends React.Component {
    render() {
        return (
            <div>
                <VenuePage />
            </div>
        );
    }
}

export default connect()(App);
