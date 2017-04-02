import * as types from '../constants/actionTypes';

const initialState = {
    items: [],
    item: {},
    fetching: false,
    error: null,
    formErrors: []
};

export default function venues(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case types.ADD_VENUE:
            break;
        case types.EDIT_VENUE:
            newState.item[action.property] = action.payload;
            break;
        case types.REMOVE_VENUE:
            newState.removeModal = true;
            break;
        case types.REMOVING_VENUE:
            newState.removeModal = false;
            break;
        case types.RECEIVE_VENUE:
            newState.item = action.payload;
            newState.fetching = false;
            newState.error = null;
            break;
        case types.RECEIVE_VENUES:
            newState.items = action.payload;
            newState.fetching = false;
            newState.error = null;
            break;
        case types.LOADING_VENUES:
            newState.fetching = true;
            break;
        case types.SAVING_VENUE:
            newState.fetching = true;
            break;
        case types.VENUE_SAVE_SUCCESS:
            newState.fetching = false;
            newState.saveSuccess = true;
            newState.item = action.payload;
            newState.formErrors = [];
            newState.error = null;
            break;
        case types.VENUE_SAVE_ERROR:
            newState.fetching = false;
            newState.formErrors = action.payload;
            break;
        case types.VENUE_GET_ERROR:
        case types.VENUES_GET_ERROR:
            newState.fetching = false;
            newState.error = action.payload;
            break;
        case types.LEAVE_FORM:
            newState.item = {};
            newState.saveSuccess = null;
            newState.removeModal = null;
            newState.formErrors = [];
            break;
    }

    return newState;

}
