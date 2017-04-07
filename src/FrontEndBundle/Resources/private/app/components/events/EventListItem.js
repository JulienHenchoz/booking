import React, {PropTypes} from "react"
import {Row, Col, Button} from 'react-materialize';
import {connect} from "react-redux"
import {CollectionItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';
import l10n from '../../l10n/localization';
import DateTimeBox from './DateTimeBox';

import * as actions from '../../actions/eventsActions';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    website: PropTypes.string,
    editLink: PropTypes.bool
};

class EventListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image = <Icon className="large grey-text">event</Icon>
        if (this.props.image !== undefined && this.props.image) {
            image = <img className="circle responsive-img" src={this.props.image}/>;
        }

        let content = (
            <Row className="valign-wrapper">
                <Col s={3} l={2} className="collection-image center-align valign">
                    <DateTimeBox dateTime={this.props.startDate}/>
                </Col>
                <Col s={9} l={10}>
                    <h4>{this.props.name}</h4>
                    <p>{this.props.venue.name}</p>
                </Col>
            </Row>
        );

        return (
            <div>
                {this.props.editLink &&
                <Link to={l10n.formatString(routes.EVENTS_EDIT, this.props.id)} className="collection-item" href="#">
                    {content}
                </Link>
                }

                {!this.props.editLink &&
                <a href="javascript:;" className="collection-item">
                    {content}
                </a>

                }
            </div>
        );
    }
}

EventListItem.propTypes = propTypes;

export default connect((store) => {
    return Object.assign({}, store.events);
})(EventListItem);
