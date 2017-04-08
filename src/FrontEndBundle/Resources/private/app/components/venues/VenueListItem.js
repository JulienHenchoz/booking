import React, {PropTypes} from "react"
import {Row, Col, Button} from 'react-materialize';
import {connect} from "react-redux"
import {CollectionItem, Icon} from 'react-materialize';
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';
import l10n from '../../l10n/localization';
import FixedActionButton from '../menu/FixedActionButton';

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
                <Icon className="large hide-on-small-only circle">business</Icon>
                <Icon className="medium hide-on-large-only circle">business</Icon>
            </div>
        );
        if (this.props.image !== undefined && this.props.image) {
            image = <img className="circle responsive-img" src={this.props.image}/>;
        }
        return (
            <div className="collection-item avatar unclickable">
                {image}
                <h4>{this.props.name}</h4>
                <p>{this.props.address}</p>

                <FixedActionButton>
                    <li>
                        <Link
                            className="btn-floating blue btn-flat"
                            to={l10n.formatString(routes.VENUES_EDIT, this.props.id)}
                            href="#">
                            <Icon>mode_edit</Icon>
                        </Link>
                    </li>
                </FixedActionButton>
            </div>
        );
    }
}

VenueListItem.propTypes = propTypes;

export default connect((store) => {
    return Object.assign({}, store.venues);
})(VenueListItem);
