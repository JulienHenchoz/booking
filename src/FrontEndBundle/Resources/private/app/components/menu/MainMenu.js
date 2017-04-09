import React from "react";
import {Icon, SideNav, SideNavItem, Button} from 'react-materialize';
import NavLink from './NavLink';
import l10n from '../../l10n/localization';
import * as routes from '../../constants/routes';

export default class MainMenu extends React.Component {

    render() {
        return (
            <div>
                <SideNav options={{ draggable: true, closeOnClick: true }} trigger={ <div id="menu-trigger-btn" className="hide"><Icon>menu</Icon></div> }>

                    <SideNavItem userView
                        user={{
                            background: '/img/background.png',
                        }} />

                    <NavLink to={routes.DASHBOARD} icon="dashboard">{l10n.dashboard}</NavLink>

                    <NavLink to={routes.EVENTS_LIST} icon="event">{l10n.incoming_events}</NavLink>
                    <NavLink to={routes.EVENTS_LIST_PAST} icon="history">{l10n.past_events}</NavLink>


                    <NavLink to={routes.VENUES_LIST} icon="business">{l10n.venues_title}</NavLink>
                </SideNav>
            </div>
        );
    }
}
