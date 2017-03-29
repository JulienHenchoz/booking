import React, {PropTypes} from "react"
import {connect} from "react-redux"
import {Table} from 'react-materialize';

import * as actions from '../../actions/venuesActions';

import VenueListItem from './VenueListItem';

const propTypes = {
    dispatch: PropTypes.func.isRequired,
    items: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.string
};

class VenuesList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(actions.fetchVenues());
    }

    render() {
        let items = [];

        this.props.items.forEach(function (venue) {
            items.push(<VenueListItem key={venue.id} {...venue} />);
        });
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Capacité</th>
                        <th>Adresse</th>
                        <th>Téléphone</th>
                        <th>Site web</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </Table>
        )


    }
}

VenuesList.propTypes = propTypes;

export default connect((store) => {
    return Object.assign({}, store.venues);
})(VenuesList);
