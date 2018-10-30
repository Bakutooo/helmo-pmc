import {combineReducers} from 'redux';
import connectionReducer from './connectionReducer';
import eventReducer from './eventReducer';

export default combineReducers({
    connection : connectionReducer,
    event : eventReducer
})