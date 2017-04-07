import * as types from '../constants/actionTypes';

const initialState = {
    items: [],
    pastItems: [],
    item: {},
    fetching: false,
    error: null,
    removeModal: false,
    formErrors: {}
};

export default function events(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        /**
         * Get actions
         */
        case types.EVENT_GET_ERROR:
        case types.EVENTS_GET_ERROR:
            newState.fetching = false;
            newState.error = action.payload;
            break;
        case types.RECEIVE_EVENT:
            newState.item = action.payload;
            newState.fetching = false;
            newState.error = null;
            break;
        case types.RECEIVE_EVENTS:
            newState.items = action.payload;
            newState.fetching = false;
            newState.error = null;
            break;
        case types.RECEIVE_PAST_EVENTS:
            newState.pastItems = action.payload;
            newState.fetching = false;
            newState.error = null;
            break;
        case types.LOADING_EVENTS:
            newState.fetching = true;
            break;


        /**
         * Remove actions
         */
        case types.REMOVE_EVENT:
            newState.removeModal = true;
            break;
        case types.CANCEL_REMOVE_EVENT:
            newState.removeModal = false;
            break;
        case types.REMOVING_EVENT:
            newState.removeModal = false;
            newState.fetching = true;
            break;
        case types.EVENT_REMOVE_SUCCESS:
            newState.fetching = false;
            newState.saveSuccess = true;
            newState.item = {};
            newState.formErrors = {};
            newState.error = null;
            break;
        case types.EVENT_REMOVE_ERROR:
            newState.fetching = false;
            break;

        /**
         * Add/Edit actions
         */
        case types.EDIT_EVENT:
            newState.formErrors = {};
            newState.item[action.property] = action.payload;
            break;
        case types.SAVING_EVENT:
            newState.fetching = true;
            break;
        case types.EVENT_SAVE_SUCCESS:
            newState.fetching = false;
            newState.saveSuccess = true;
            newState.item = action.payload;
            newState.formErrors = {};
            newState.error = null;
            break;
        case types.EVENT_SAVE_ERROR:
            newState.fetching = false;
            newState.formErrors = action.payload;
            break;


        /**
         * Misc actions
         */
        case types.LEAVE_FORM:
            newState.item = {};
            newState.saveSuccess = null;
            newState.removeModal = null;
            newState.formErrors = {};
            break;
    }

    return newState;

}
