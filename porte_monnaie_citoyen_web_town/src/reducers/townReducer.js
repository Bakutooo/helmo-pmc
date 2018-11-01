import { FETCH_TOWN, SHOW_ERROR } from "./../actions/types";

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
        default: return state;
    }
}