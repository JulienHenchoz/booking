import React from "react";
import {Icon, SideNav, SideNavItem, Button} from 'react-materialize';
import NavLink from './NavLink';

export default class MainMenu extends React.Component {

    render() {
        return (
            <div>
                <SideNav options={{ draggable: true }} trigger={ <div className="hide-on-med-and-up"><Icon>menu</Icon></div> }>

                    <SideNavItem userView
                        user={{
                            background: '/img/background.png',
                        }} />

                    <NavLink to="/venues/"  icon="business">Salles</NavLink>
                    <NavLink to="/events/"  icon="movie">Evénements</NavLink>
                    <NavLink to="/bookings/"  icon="email">Réservations</NavLink>
                </SideNav>
            </div>
        );
    }
}
