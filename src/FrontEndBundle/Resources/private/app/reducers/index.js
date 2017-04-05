import { combineReducers } from 'redux';
import venues from '../reducers/venues';
import events from '../reducers/events';

const rootReducer = combineReducers({
    venues,
    events
});

export default rootReducer;

