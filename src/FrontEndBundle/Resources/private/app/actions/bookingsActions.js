import * as types from '../constants/actionTypes';
import * as ajaxRoutes from '../constants/ajaxRoutes';

import * as utils from '../utils/utils';
import l10n from '../l10n/localization';
export function loadingBookings() {
    return {
        type: types.LOADING_BOOKINGS
    };
}

export function savingBooking() {
    return {
        type: types.SAVING_BOOKING
    };
}


export function cancelRemoveBooking() {
    return {
        type: types.CANCEL_REMOVE_BOOKING,
    };
}

export function removingBooking() {
    return {
        type: types.REMOVING_BOOKING,
    };
}

export function editBooking(property, value) {
    return {
        type: types.EDIT_BOOKING,
        property: property,
        payload: value
    };
}

export function removeBooking(id) {
    return {
        type: types.REMOVE_BOOKING,
        index: id
    };
}


export function receiveBookings(items) {
    return {
        type: types.RECEIVE_BOOKINGS,
        payload: items
    };
}

export function receivePastBookings(items) {
    return {
        type: types.RECEIVE_PAST_BOOKINGS,
        payload: items
    };
}

export function leaveForm() {
    return {
        type: types.LEAVE_FORM
    }
}

export function receiveBooking(item) {
    return {
        type: types.RECEIVE_BOOKING,
        payload: item
    };
}

export function saveSuccess(item) {
    utils.toastSuccess(l10n.save_success);
    return {
        type: types.BOOKING_SAVE_SUCCESS,
        payload: item
    };
}

export function saveError(errors) {
    utils.toastError(l10n.save_error);
    return {
        type: types.BOOKING_SAVE_ERROR,
        payload: errors
    };
}

export function removeSuccess(item) {
    utils.toastSuccess(l10n.remove_success);
    return {
        type: types.BOOKING_REMOVE_SUCCESS,
        payload: item
    };
}

export function removeError(errors) {
    utils.toastError(l10n.remove_error);
    return {
        type: types.BOOKING_REMOVE_ERROR,
        payload: errors
    };
}

export function getError(message) {
    utils.toastError(message);
    return {
        type: types.BOOKINGS_GET_ERROR,
        payload: message
    };
}

export function validationError(errors) {
    utils.toastError(l10n.validation_errors);
    return {
        type: types.VALIDATION_ERROR,
        payload: errors
    };
}

export function addBooking(form) {
    return dispatch => {
        dispatch(savingBooking());
        // TODO : Dispatch an error if the item has no id
        fetch(ajaxRoutes.BOOKING_ADD, {
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
            })
            .catch(function() {
                dispatch(saveError([]));
            });
    }
}

export function confirmRemoveBooking(id) {
    return dispatch => {
        dispatch(removingBooking());
        // TODO : Dispatch an error if the item has no id
        fetch(l10n.formatString(ajaxRoutes.BOOKING_REMOVE, id), {
            method: "DELETE",
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json.success === true) {
                    dispatch(removeSuccess(json.object));
                }
                else {
                    dispatch(removeError(json.errors));
                }
            })
            .catch(function() {
                dispatch(removeError([]));
            });
    }
}


export function updateBooking(id, form) {
    return dispatch => {
        dispatch(savingBooking());
        // TODO : Dispatch an error if the item has no id
        fetch(l10n.formatString(ajaxRoutes.BOOKING_EDIT, id), {
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
            })
            .catch(function(error) {
                console.error(error);
                dispatch(saveError([]));
            });
    }
}


export function fetchBookings() {
    return dispatch => {
        dispatch(loadingBookings());
        fetch(ajaxRoutes.BOOKINGS_GET)
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(receiveBookings(json));
            })
            .catch(function() {
                dispatch(getError(l10n.bookings_fetch_error));
            });
    }
}

export function fetchPastBookings() {
    return dispatch => {
        dispatch(loadingBookings());
        fetch(ajaxRoutes.BOOKINGS_GET_PAST)
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(receivePastBookings(json));
            })
            .catch(function() {
                dispatch(getError(l10n.bookings_fetch_error));
            });
    }
}

export function fetchBooking(id) {
    return dispatch => {
        dispatch(loadingBookings());

        fetch(l10n.formatString(ajaxRoutes.BOOKING_GET, id))
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(receiveBooking(json));
            })
            .catch(function() {
                dispatch(getError(l10n.booking_fetch_error));
            });

    }
}

