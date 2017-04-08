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

    onChangeStatus(e) {
        e.preventDefault();
        this.props.dispatch(actions.changeStatus(this.props.id));
    }

    render() {
        return (
            <div className={"collection-item avatar unclickable " + (this.props.showedUp ? 'status-ok' : '')}>
                <div className="datetime-box booking circle">
                    <span className="month-day">{this.props.nbExpected}</span>
                    <span className="year">{l10n.fields.bookings.persons}</span>
                </div>

                <a href="#" onClick={this.onChangeStatus.bind(this)}>

                    <h4>{this.props.lastName.toUpperCase()} {this.props.firstName}</h4>
                    <p>{moment(this.props.subscribeDate).format('D MMM YYYY à HH:mm')}</p>
                </a>

                <FixedActionButton>
                    {this.props.editLink &&
                    <li>
                        <Link
                            className="btn-floating blue btn-flat"
                            to={l10n.formatString(routes.BOOKINGS_EDIT, this.props.eventItem.id, this.props.id)}
                            href="#">
                            <Icon>mode_edit</Icon>
                        </Link>
                    </li>
                    }
                </FixedActionButton>


            </div>
        );
    }
}

BookingListItem.propTypes = propTypes;

export default connect((store) => {
    return Object.assign({}, store.bookings);
})(BookingListItem);
