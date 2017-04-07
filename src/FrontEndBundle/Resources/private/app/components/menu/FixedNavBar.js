import React from "react";
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Row, Col, Icon} from 'react-materialize';

const FixedNavBar = ({title, align, children, icon = null, showAddBtn = false, addRoute = ''}) => {
    let iconTag = '';
    if (icon) {
        iconTag = <Icon>{icon}</Icon>
    }
    return (
        <div className="navbar-fixed">
            <Row>
                <nav>
                    <div className="nav-wrapper">
                        <Col s={12}>

                        <span className="brand-logo center">
                            {iconTag}
                            {title}
                        </span>
                            {children}

                            {!children &&
                            <ul className="right">
                                {showAddBtn &&
                                <li>
                                    <Link className="blue waves-effect" to={addRoute}>
                                        <Icon>add</Icon>
                                    </Link>
                                </li>
                                }
                            </ul>
                            }

                        </Col>

                    </div>
                </nav>
            </Row>
        </div>
    )
};


export default FixedNavBar;
