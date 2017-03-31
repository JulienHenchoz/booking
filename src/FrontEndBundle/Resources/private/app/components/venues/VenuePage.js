import React from "react";
import {connect} from "react-redux";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Row, Col } from 'react-materialize';

import VenuesList from "./VenuesList";
import VenueForm from './VenueForm';

class VenuePage extends React.Component {
    render() {
        return (
            <Row>
                <Col s={12}>
                <VenuesList />
                </Col>
            </Row>
        );
    }
}

export default connect()(VenuePage);
