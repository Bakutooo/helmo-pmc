import { FETCH_PARTNER_ACCEPTED, FETCH_PARTNER_WAITING, ACCEPT_PARTNER, REFUSE_PARTNER, DELETE_PARTNER } from "./../actions/types";

const initialState = {
    partnersAccepted: [],
    partnersWaiting: []
}

export default (state = initialState, action) => {
    let index;
    let temp;
    switch(action.type){
        case FETCH_PARTNER_ACCEPTED:
            return {
                ...state,
                partnersAccepted: action.payload
            }
        case FETCH_PARTNER_WAITING:
            return {
                ...state,
                partnersWaiting: action.payload
            }
        case ACCEPT_PARTNER:
            index = state.partnersWaiting.findIndex(e => e._id === action.payload);
            temp = [...state.partnersWaiting];
            temp.splice(index, 1);
            return {
                ...state,
                partnersAccepted: [...state.partnersAccepted, state.partnersWaiting[index]],
                partnersWaiting: temp,
            }
        case REFUSE_PARTNER:
            index = state.partnersWaiting.findIndex(e => e._id === action.payload);
            temp = [...state.partnersWaiting];
            temp.splice(index, 1);
            return {
                ...state,
                partnersWaiting: temp,
            }
        case DELETE_PARTNER:
            index = state.partnersAccepted.findIndex(e => e._id === action.payload);
            temp = [...state.partnersAccepted];
            temp.splice(index, 1);
            return {
                ...state,
                partnersAccepted: temp
            }
        default: return state;
    }
}