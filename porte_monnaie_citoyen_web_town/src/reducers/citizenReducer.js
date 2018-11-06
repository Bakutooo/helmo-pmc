import { FETCH_CITIZENS } from "./../actions/types";

const initialState = {
    citizens: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_CITIZENS:
            return {
                ...state,
                citizens: action.payload
            }
        default: return state;
    }
}