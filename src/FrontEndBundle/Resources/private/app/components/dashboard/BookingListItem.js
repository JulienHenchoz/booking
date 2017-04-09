import React, {PropTypes} from "react"
import {Row, Col, Button} from 'react-materialize';
import {connect} from "react-redux"
import {CollectionItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';
import l10n from '../../l10n/localization';
import FixedActionButton from '../menu/FixedActionButton';
import * as actions from '../../actions/bookingsActions';
import moment from 'moment';
import {Preloader} from 'react-materialize';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    nbExpected: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
};

class BookingListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className={"collection-item avatar unclickable"}>
                <div className="datetime-box booking circle">
                    <span className="month-day">{this.props.nbExpected}</span>
                    <span className="year">{l10n.fields.bookings.persons}</span>
                </div>


                <h4>{this.props.lastName.toUpperCase()} {this.props.firstName}</h4>
                <p>{this.props.event.name} / {moment(this.props.event.startDate).format('DD.MM.YYYY')}</p>
                <p>{moment(this.props.subscribeDate).fromNow()}</p>

            </li>
        );
    }
}

BookingListItem.propTypes = propTypes;

export default connect((store) => {
    return Object.assign({}, store.bookings);
})(BookingListItem);
