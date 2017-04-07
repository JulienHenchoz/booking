import * as types from '../constants/actionTypes';
import * as ajaxRoutes from '../constants/ajaxRoutes';

import * as utils from '../utils/utils';
import l10n from '../l10n/localization';
export function loadingEvents() {
    return {
        type: types.LOADING_EVENTS
    };
}

export function savingEvent() {
    return {
        type: types.SAVING_EVENT
    };
}


export function cancelRemoveEvent() {
    return {
        type: types.CANCEL_REMOVE_EVENT,
    };
}

export function removingEvent() {
    return {
        type: types.REMOVING_EVENT,
    };
}

export function editEvent(property, value) {
    return {
        type: types.EDIT_EVENT,
        property: property,
        payload: value
    };
}

export function removeEvent(id) {
    return {
        type: types.REMOVE_EVENT,
        index: id
    };
}


export function receiveEvents(items) {
    return {
        type: types.RECEIVE_EVENTS,
        payload: items
    };
}

export function receivePastEvents(items) {
    return {
        type: types.RECEIVE_PAST_EVENTS,
        payload: items
    };
}

export function leaveForm() {
    return {
        type: types.LEAVE_FORM
    }
}

export function receiveEvent(item) {
    return {
        type: types.RECEIVE_EVENT,
        payload: item
    };
}

export function saveSuccess(item) {
    utils.toastSuccess(l10n.save_success);
    return {
        type: types.EVENT_SAVE_SUCCESS,
        payload: item
    };
}

export function saveError(errors) {
    utils.toastError(l10n.save_error);
    return {
        type: types.EVENT_SAVE_ERROR,
        payload: errors
    };
}

export function removeSuccess(item) {
    utils.toastSuccess(l10n.remove_success);
    return {
        type: types.EVENT_REMOVE_SUCCESS,
        payload: item
    };
}

export function removeError(errors) {
    utils.toastError(l10n.remove_error);
    return {
        type: types.EVENT_REMOVE_ERROR,
        payload: errors
    };
}

export function getError(message) {
    utils.toastError(message);
    return {
        type: types.EVENTS_GET_ERROR,
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

export function addEvent(form) {
    return dispatch => {
        dispatch(savingEvent());
        // TODO : Dispatch an error if the item has no id
        fetch(ajaxRoutes.EVENT_ADD, {
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

export function confirmRemoveEvent(id) {
    return dispatch => {
        dispatch(removingEvent());
        // TODO : Dispatch an error if the item has no id
        fetch(l10n.formatString(ajaxRoutes.EVENT_REMOVE, id), {
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


export function updateEvent(id, form) {
    return dispatch => {
        dispatch(savingEvent());
        // TODO : Dispatch an error if the item has no id
        fetch(l10n.formatString(ajaxRoutes.EVENT_EDIT, id), {
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


export function fetchEvents() {
    return dispatch => {
        dispatch(loadingEvents());
        fetch(ajaxRoutes.EVENTS_GET)
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(receiveEvents(json));
            })
            .catch(function() {
                dispatch(getError(l10n.events_fetch_error));
            });
    }
}

export function fetchPastEvents() {
    return dispatch => {
        dispatch(loadingEvents());
        fetch(ajaxRoutes.EVENTS_GET_PAST)
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(receivePastEvents(json));
            })
            .catch(function() {
                dispatch(getError(l10n.events_fetch_error));
            });
    }
}

export function fetchEvent(id) {
    return dispatch => {
        dispatch(loadingEvents());

        fetch(l10n.formatString(ajaxRoutes.EVENT_GET, id))
            .then(response => {
                return response.json();
            })
            .then(json => {
                dispatch(receiveEvent(json));
            })
            .catch(function() {
                dispatch(getError(l10n.event_fetch_error));
            });

    }
}

