import { FETCH_ALL_TOWNS } from "./../actions/types";

const initialState = {
    towns: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALL_TOWNS: 
            return {
                ...state,
                towns: action.payload
            }
        default: return state;
    }
}