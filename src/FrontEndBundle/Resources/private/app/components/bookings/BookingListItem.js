import React, {PropTypes} from "react"
import {Row, Col, Button} from 'react-materialize';
import {connect} from "react-redux"
import {CollectionItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';
import l10n from '../../l10n/localization';
import DateTimeBox from './DateTimeBox';
import FixedActionButton from '../menu/FixedActionButton';
import * as actions from '../../actions/bookingsActions';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    website: PropTypes.string,
    editLink: PropTypes.bool
};

class BookingListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image = <Icon className="large grey-text">booking</Icon>
        if (this.props.image !== undefined && this.props.image) {
            image = <img className="circle responsive-img" src={this.props.image}/>;
        }

        let content = (
            <div>

            </div>
        );

        return (
            <div className="collection-item avatar unclickable">

                <DateTimeBox className="circle" dateTime={this.props.startDate}/>

                <h4>{this.props.name}</h4>
                <p>{this.props.venue.name}</p>

                <FixedActionButton>
                    {this.props.editLink &&
                    <li>
                        <Link
                            className="btn-floating blue btn-flat"
                            to={l10n.formatString(routes.BOOKINGS_EDIT, this.props.id)}
                            href="#">
                            <Icon>mode_edit</Icon>
                        </Link>
                    </li>
                    }

                    <li>
                        <Link
                            className="btn-floating amber btn-flat"
                            to={l10n.formatString(routes.BOOKINGS_EDIT, this.props.id)}
                            href="#">
                            <Icon>email</Icon>
                        </Link>
                    </li>
                </FixedActionButton>


            </div>
        );
    }
}

BookingListItem.propTypes = propTypes;

export default connect((store) => {
    return Object.assign({}, store.bookings);
})(BookingListItem);
