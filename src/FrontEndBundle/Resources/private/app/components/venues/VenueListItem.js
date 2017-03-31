import React, { PropTypes } from "react"
import { Row, Col } from 'react-materialize';
import {connect} from "react-redux"
import {CollectionItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';

import * as actions from '../../actions/venuesActions';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    website: PropTypes.string
};

class VenueListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={'/venue/' + this.props.id} className="collection-item" href="#">
                <Row>
                    <Col s={2} className="collection-image">
                        <img className="circle responsive-img" src={"/img/venues/" + this.props.image} />
                    </Col>
                    <Col s={10}>
                        <h4>{this.props.name}</h4>
                        <p>{this.props.address}</p>
                    </Col>
                </Row>
            </Link>
        );
    }
}

VenueListItem.propTypes = propTypes;

export default connect((store) => {
    return Object.assign({}, store.venues);
})(VenueListItem);