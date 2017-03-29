import * as types from '../constants/actionTypes';

const initialState = {
    items: [],
    fetching: false,
    error: null
};

export default function venues(state = initialState, action) {
    switch (action.type) {
        case types.ADD_VENUE:
            return state;
        case types.EDIT_VENUE:
            return state;
        case types.REMOVE_VENUE:
            return state;
        case types.RECEIVE_VENUES:
            let newState = Object.assign({}, state);
            newState.items = action.payload;
            return newState;
        default:
            return state;
    }
}
