import { combineReducers } from "redux";
import citizenReducer from "./citizenReducer";
import townReducer from "./townReducer";
import eventReducer from "./eventReducer";
import partnerReducer from "./partnerReducer";

export default combineReducers({
    citizen: citizenReducer,
    town: townReducer,
    event: eventReducer,
    partner: partnerReducer
});