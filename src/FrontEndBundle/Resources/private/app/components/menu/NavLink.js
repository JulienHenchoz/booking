import React from "react";
import {Link} from 'react-router-dom';
import {Icon} from 'react-materialize';
import { Route } from 'react-router-dom';

const NavLink = ({to, children, icon, collapsible}) => (
    <Route path={to} children={({match}) => (
        <li role="presentation" className={match ? 'active' : ''}>
            <Link to={to} className={collapsible ? 'collapsible-header' : ''}>
                <i className="material-icons">{icon}</i>
                {children}
            </Link>
        </li>
    )} />
)

export default NavLink;
