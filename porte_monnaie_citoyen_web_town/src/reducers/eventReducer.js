import {FETCH_PARTNER_DEMANDS} from '../actions/types'

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_PARTNER_DEMANDS:
            console.log("ICI");
            return {
                ...state,
                events : action.payload
            }
        default:
            return state;
    }
}