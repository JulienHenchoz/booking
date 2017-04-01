import * as types from '../constants/actionTypes';
import * as utils from '../utils/utils';

export function loadingVenues() {
    return {
        type: types.LOADING_VENUES
    };
}

export function savingVenue() {
    return {
        type: types.SAVING_VENUE
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

export function leaveForm() {
    return {
        type: types.LEAVE_FORM
    }
}

export function receiveVenue(item) {
    return {
        type: types.RECEIVE_VENUE,
        payload: item
    };
}

export function saveSuccess(item) {
    utils.toastSuccess('L\'élément a été sauvegardé avec succès !');
    return {
        type: types.VENUE_SAVE_SUCCESS,
        payload: item
    };
}

export function saveError(errors) {
    utils.toastError('Impossible de sauver l\'élément !');
    return {
        type: types.VENUE_SAVE_ERROR,
        payload: errors
    };
}

export function updateVenue(id, form) {
    return dispatch => {
        dispatch(savingVenue());
        // TODO : Dispatch an error if the item has no id
        fetch('/api/venues/edit/' + id, {
            method: "POST",
            body: new FormData(form)
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json.success === true) {
                    dispatch(saveSuccess(json.object));
                }
                else {
                    dispatch(saveError(json.errors));
                }
            });
    }
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


