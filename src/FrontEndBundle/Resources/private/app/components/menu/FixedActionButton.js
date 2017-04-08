import React from "react";
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Row, Col, Icon} from 'react-materialize';

export default ({children}) => {

    return (
        <div className="secondary-content">
            <div className="fixed-action-btn horizontal">
                <a href="#" onClick={(e) => {
                    e.preventDefault();
                }}>
                    <Icon className="small grey-text">more_horiz</Icon>
                </a>
                <ul>
                    {children}
                </ul>
            </div>
        </div>
    );
}
