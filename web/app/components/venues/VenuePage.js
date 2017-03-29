import React from "react"
import {connect} from "react-redux"

import { Row, Col } from 'react-materialize';
import VenuesList from "./VenuesList";

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
