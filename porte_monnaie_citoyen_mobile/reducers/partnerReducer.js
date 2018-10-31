import { FETCH_ALL_PARTNERS, FETCH_PARTNER } from "./../actions/types";

const initialState = {
    partners: [],
    partner: {
        name: "",
        mail: "",
        phone: "",
        image: "",
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALL_PARTNERS:
            console.log(FETCH_ALL_PARTNERS);
            return {
                ...state,
                partners: action.payload
            }
        case FETCH_PARTNER:
            console.log(FETCH_PARTNER);
            return {
                ...state,
                partner: state.partners.find(p => p._id === action.payload)
            }
        default: return state;
    }
}