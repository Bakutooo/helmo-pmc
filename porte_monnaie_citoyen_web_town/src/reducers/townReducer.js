import { FETCH_TOWN, SHOW_ERROR, DECONNECTION } from "./../actions/types";

const initialState = {
    town: null,
    error: ""
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_TOWN:
            return {
                ...state,
                town: action.payload
            }
        case SHOW_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        case DECONNECTION:
            return {
                ...state,
                town: null
            }
        default: return state;
    }
}