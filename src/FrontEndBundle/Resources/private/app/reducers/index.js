import { combineReducers } from 'redux';
import venues from '../reducers/venues';
import events from '../reducers/events';
import bookings from '../reducers/bookings';

const rootReducer = combineReducers({
    venues,
    events,
    bookings
});

export default rootReducer;

