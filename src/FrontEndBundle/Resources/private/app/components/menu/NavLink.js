import React from "react";
import {Link} from 'react-router-dom';
import {Icon} from 'react-materialize';
import { Route, NavLink as DomNavLink } from 'react-router-dom';

const NavLink = ({to, children, icon, collapsible, index}) => (
    <Route path={to} children={({match}) => (
        <li role="presentation" className={match && !index ? 'active' : ''}>

            <DomNavLink exact={true} to={to} className={collapsible ? 'collapsible-header' : ''}>
                <i className="material-icons">{icon}</i>
                {children}
            </DomNavLink>
        </li>
    )} />
)

export default NavLink;
