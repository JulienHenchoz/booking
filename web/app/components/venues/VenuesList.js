import React, { PropTypes } from "react"
import {connect} from "react-redux"

import * as actions from '../../actions/venuesActions';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.string
};

class VenuesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { shownPlaylistIndex: null };
    }

    componentWillMount() {
        const dispatch = this.props.dispatch;
        dispatch(actions.fetchVenues());
    }

    render() {
        console.log(this);
        return (
            <div>
                { this.state }
            </div>
        );
    }
}

VenuesList.propTypes = propTypes;

export default connect()(VenuesList);
