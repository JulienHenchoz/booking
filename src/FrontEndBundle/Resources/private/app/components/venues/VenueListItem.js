import React, { PropTypes } from "react"
import { Row, Col, Button } from 'react-materialize';
import {connect} from "react-redux"
import {CollectionItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';
import l10n from '../../l10n/localization';

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
        let image = (
            <div>
                <Icon className="large grey-text hide-on-small-only">business</Icon>
                <Icon className="medium grey-text hide-on-large-only">business</Icon>
            </div>
        );
        if (this.props.image !== undefined && this.props.image) {
            image = <img className="circle responsive-img" src={this.props.image} />;
        }
        return (
            <Link to={l10n.formatString(routes.VENUES_EDIT, this.props.id)} className="collection-item" href="#">
                <Row>
                    <Col s={3} l={2} className="collection-image center-align">
                        {image}
                    </Col>
                    <Col s={9} l={10}>
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
