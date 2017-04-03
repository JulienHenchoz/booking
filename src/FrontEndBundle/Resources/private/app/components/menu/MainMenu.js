import React from "react";
import {Icon, SideNav, SideNavItem, Button} from 'react-materialize';
import NavLink from './NavLink';
import l10n from '../../l10n/localization';

export default class MainMenu extends React.Component {

    render() {
        return (
            <div>
                <SideNav options={{ draggable: true }} trigger={ <div className="hide-on-med-and-up"><Icon>menu</Icon></div> }>

                    <SideNavItem userView
                        user={{
                            background: '/img/background.png',
                        }} />

                    <NavLink to="/venues/" icon="business">{l10n.venues_title}</NavLink>
                    <NavLink to="/events/" icon="movie">{l10n.events_title}</NavLink>
                    <NavLink to="/bookings/" icon="email">{l10n.bookings_title}</NavLink>
                </SideNav>
            </div>
        );
    }
}
