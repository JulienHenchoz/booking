import React from "react";
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Row, Col} from 'react-materialize';

const FixedNavBar = ({title, align, children}) => (
    <div className="navbar-fixed">
        <Row>
                <nav>
                    <div className="nav-wrapper">
                        <Col s={12}>

                        <span className="brand-logo">{title}</span>
                        <ul className="right">
                            {children}
                        </ul>
                        </Col>

                    </div>
                </nav>
        </Row>
    </div>
)

export default FixedNavBar;
