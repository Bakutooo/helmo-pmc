import { FETCH_PARTNER_ACCEPTED, FETCH_PARTNER_WAITING, ACCEPT_PARTNER, REFUSE_PARTNER } from "./../actions/types";

const initialState = {
    partnerAccepted: [],
    partnerWaiting: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_PARTNER_ACCEPTED:
            return {
                ...state,
                partnerAccepted: action.payload
            }
        case FETCH_PARTNER_WAITING:
            return {
                ...state,
                partnerWaiting: action.payload
            }
        case ACCEPT_PARTNER:
            const index = state.partnerWaiting.findIndex(e => e._id === action.payload);
            return {
                ...state,
                partnerAccepted: [...state.partnerAccepted, state.partnerWaiting.find(e => e._id === action.payload)],
                partnerWaiting: state.partnerWaiting.splice(index, 1)
            }
        case REFUSE_PARTNER:
            const index = state.partnerWaiting.findIndex(e => e._id === action.payload);
            return {
                ...state,
                partnerWaiting: state.partnerWaiting.splice(index, 1)
            }
        default: return state;
    }
}