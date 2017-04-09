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

                    <li className="no-padding">
                        <ul className="collapsible collapsible-accordion">
                            <li>
                                <a className="collapsible-header">
                                    {l10n.events_title}<i className="material-icons">event</i>
                                </a>
                                <div className="collapsible-body">
                                    <ul>
                                        <NavLink to={routes.EVENTS_LIST} icon="fast_forward">{l10n.incoming_events}</NavLink>
                                        <NavLink to={routes.EVENTS_LIST_PAST} icon="history">{l10n.past_events}</NavLink>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </li>

                    <NavLink to={routes.VENUES_LIST} icon="business">{l10n.venues_title}</NavLink>
                </SideNav>
            </div>
        );
    }
}
