import {combineReducers} from 'redux';
import townReducer from './townReducer';
import citizenReducer from './citizenReducer'
import eventReducer from './eventReducer';
import partnerReducer from './partnerReducer';

export default combineReducers({
    town : townReducer,
    event : eventReducer,
    citizen: citizenReducer,
    partner: partnerReducer
})