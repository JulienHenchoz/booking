import * as types from '../constants/actionTypes';

export function addVenue(properties) {
    return {
        type: types.ADD_VENUE,
        payload: properties
    };
}

export function editVenue(id, properties) {
    return {
        type: types.EDIT_VENUE,
        index: id,
        payload: properties
    };
}


export function removeVenue(id) {
    return {
        type: types.REMOVE_VENUE,
        index: id
    };
}

export function receiveVenues(items) {
    return {
        type: types.RECEIVE_VENUES,
        payload: items
    };
}

export function fetchVenues() {
    return dispatch =>
    fetch('/api/venues/get')
        .then(response => {
            return response.json();
        })
        .then(json => {
            dispatch(receiveVenues(json));
        });
}


