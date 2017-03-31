import * as types from '../constants/actionTypes';

export function loadingVenues() {
    return {
        type: types.LOADING_VENUES
    };
}

export function addVenue(properties) {
    return {
        type: types.ADD_VENUE,
        payload: properties
    };
}

export function editVenue(property, value) {
    return {
        type: types.EDIT_VENUE,
        property: property,
        payload: value
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

export function receiveVenue(item) {
    return {
        type: types.RECEIVE_VENUE,
        payload: item
    };
}

export function fetchVenues() {
    return dispatch => {
        dispatch(loadingVenues());
        fetch('/api/venues/get')
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(receiveVenues(json));
            });
    }
}

export function fetchVenue(id) {
    return dispatch => {
        dispatch(loadingVenues());

        fetch('/api/venues/get/' + id)
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(receiveVenue(json));
            });

    }
}


