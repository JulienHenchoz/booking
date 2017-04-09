import * as types from '../constants/actionTypes';

const initialState = {
    data: {},
    fetching: false,
    error: null,
};


export default function dashboard(state = initialState, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        /**
         * Get actions
         */
        case types.DASHBOARD_GET_ERROR:
            newState.error = action.payload;
            newState.fetching = false;
            newState.data = {};
        break;
        case types.LOADING_DASHBOARD:
            newState.fetching = true;
            newState.error = null;
            break;
        case types.RECEIVE_DASHBOARD:
            newState.data = action.payload;
            newState.fetching = false;
            newState.error = null;
            break;
    }

    return newState;

}
