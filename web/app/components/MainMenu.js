import React from "react"
import {connect} from "react-redux"
import {Navbar, NavItem, Icon, Row} from 'react-materialize';

export default class MainMenu extends React.Component {

    render() {
        return (
            <div className="container">
                <Row>
                    <Navbar brand="Booking" right>
                        <NavItem href="#"><Icon>location_on</Icon></NavItem>
                        <NavItem href="#"><Icon>movie</Icon></NavItem>
                        <NavItem href="#"><Icon>email</Icon></NavItem>
                    </Navbar>
                </Row>
            </div>
        );
    }
}
