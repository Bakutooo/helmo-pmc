import { FETCH_DEAL_PARTNER } from "./../actions/types";

const initialState = {
    deals: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_DEAL_PARTNER: 
            return {
                ...state,
                deals: action.payload
            }
        default: return state;
    }
}