import React from "react"
import {connect} from "react-redux"

import MainMenu from "../components/MainMenu"
import Content from "./Content";

class App extends React.Component {
    render() {
        return (
            <div>
                <MainMenu />
                <Content />
            </div>
        );
    }
}

export default connect()(App);
