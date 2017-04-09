import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Collection, Icon, Button, Row, Col} from 'react-materialize';
import {CSSTransition, transit} from "react-css-transition";
import Loader from '../utils/Loader'
import Reload from '../utils/Reload'
import {Link} from 'react-router-dom';
import l10n from "../../l10n/localization";
import * as routes from '../../constants/routes';
import moment from 'moment';
import FixedNavBar from '../menu/FixedNavBar';
import HighlightBox from '../utils/HighlightBox';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.string,
};

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    /**
     * When the component is loaded, automatically fetch events via AJAX
     */
    componentWillMount() {
    }

    render() {
        return (
            <div className="dashboard">
                <FixedNavBar
                    title={l10n.dashboard}
                    showAddBtn={false}/>

                <Row>
                    <HighlightBox colSize={6} value={5} label="spectacles à venir" />
                    <HighlightBox colSize={6} value={18} label="réservations au total" />
                    <HighlightBox colSize={6} value={62} label="personnes attendues" />
                    <HighlightBox colSize={6} value={44} suffix="%" label="remplissage moyen" />
                </Row>


                <Row>
                    <Col s={12}>
                        <h5>Dernières réservations</h5>
                    </Col>
                </Row>
                <Collection>
                    <li className="collection-item avatar">
                    </li>
                </Collection>
            </div>
        );
    }
}

Dashboard.propTypes = propTypes;

export default connect((state) => {
    return Object.assign({},
        state.dashboard);
})(Dashboard);
