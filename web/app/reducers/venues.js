import * as types from '../constants/actionTypes';

const initialState = {
    items: [],
    item: {},
    fetching: false,
    error: null
};

export default function venues(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case types.ADD_VENUE:
            return newState;
        case types.EDIT_VENUE:
            newState.item[action.property] = action.payload;
            return newState;
        case types.REMOVE_VENUE:
            return state;
        case types.RECEIVE_VENUE:
            newState.item = action.payload;
            newState.fetching = false;
            return newState;
        case types.RECEIVE_VENUES:
            newState.items = action.payload;
            newState.fetching = false;
            return newState;
        case types.LOADING_VENUES:
            newState.fetching = true;
            return newState;
        default:
            return state;
    }
}
