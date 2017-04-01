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
            break;
        case types.RECEIVE_VENUE:
            newState.item = action.payload;
            newState.fetching = false;
            break;
        case types.RECEIVE_VENUES:
            newState.items = action.payload;
            newState.fetching = false;
            break;
        case types.LOADING_VENUES:
            newState.fetching = true;
            break;
        case types.SAVING_VENUE:
            newState.fetching = true;
            break;
        case types.VENUE_SAVE_SUCCESS:
            newState.fetching = false;
            newState.item = action.payload;
            newState.formErrors = [];
            break;
        case types.VENUE_SAVE_ERROR:
            newState.fetching = false;
            newState.formErrors = action.payload;
            break;
        case types.LEAVE_FORM:
            newState.item = {};
            break;
    }

    return newState;

}
