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

export default function bookings(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        /**
         * Get actions
         */
        case types.BOOKING_GET_ERROR:
        case types.BOOKINGS_GET_ERROR:
            newState.fetching = false;
            newState.error = action.payload;
            break;
        case types.RECEIVE_BOOKING:
            newState.item = action.payload;
            newState.fetching = false;
            newState.error = null;
            break;
        case types.RECEIVE_BOOKINGS:
            newState.items = action.payload;
            newState.fetching = false;
            newState.error = null;
            break;
        case types.RECEIVE_PAST_BOOKINGS:
            newState.pastItems = action.payload;
            newState.fetching = false;
            newState.error = null;
            break;
        case types.LOADING_BOOKINGS:
            newState.fetching = true;
            break;


        /**
         * Remove actions
         */
        case types.REMOVE_BOOKING:
            newState.removeModal = true;
            break;
        case types.CANCEL_REMOVE_BOOKING:
            newState.removeModal = false;
            break;
        case types.REMOVING_BOOKING:
            newState.removeModal = false;
            newState.fetching = true;
            break;
        case types.BOOKING_REMOVE_SUCCESS:
            newState.fetching = false;
            newState.saveSuccess = true;
            newState.item = {};
            newState.formErrors = {};
            newState.error = null;
            break;
        case types.BOOKING_REMOVE_ERROR:
            newState.fetching = false;
            break;

        /**
         * Add/Edit actions
         */
        case types.EDIT_BOOKING:
            newState.formErrors = {};
            newState.item[action.property] = action.payload;
            break;
        case types.SAVING_BOOKING:
            newState.fetching = true;
            break;
        case types.BOOKING_SAVE_SUCCESS:
            newState.fetching = false;
            newState.saveSuccess = true;
            newState.item = action.payload;
            newState.formErrors = {};
            newState.error = null;
            break;
        case types.BOOKING_SAVE_ERROR:
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
