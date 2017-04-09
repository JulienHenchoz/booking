import { combineReducers } from 'redux';
import venues from '../reducers/venues';
import events from '../reducers/events';
import bookings from '../reducers/bookings';
import dashboard from '../reducers/dashboard';

const rootReducer = combineReducers({
    venues,
    events,
    bookings,
    dashboard
});

export default rootReducer;

