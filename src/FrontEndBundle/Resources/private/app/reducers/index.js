import { combineReducers } from 'redux';
import venues from '../reducers/venues';

const rootReducer = combineReducers({
    venues,
});

export default rootReducer;

