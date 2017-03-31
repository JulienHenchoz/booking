import React from "react"
import {connect} from "react-redux"
import {Icon, SideNav, SideNavItem, Button} from 'react-materialize';

export default class MainMenu extends React.Component {

    render() {
        return (
            <div>
                <SideNav options={{ draggable: true }} trigger={ <div className="show-on-medium-and-down"><Icon>menu</Icon></div> }>

                    <SideNavItem userView
                        user={{
                            background: 'img/logo.png',
                        }} />
                    <SideNavItem href="#" icon="location_on">Salles</SideNavItem>
                    <SideNavItem href="#" icon="movie">Evénements</SideNavItem>
                    <SideNavItem href="#" icon="email">Réservations</SideNavItem>
                </SideNav>
            </div>
        );
    }
}
