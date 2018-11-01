import { FETCH_EVENT_ACCEPTED, FETCH_EVENT_WAITING, ACCEPT_EVENT, REFUSE_EVENT } from "./../actions/types";

const initialState = {
    eventAccepted: [],
    eventWaiting: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_EVENT_ACCEPTED:
            return {
                ...state,
                eventAccepted: action.payload
            }
        case FETCH_EVENT_WAITING:
            return {
                ...state,
                eventWaiting: action.payload
            }
        case ACCEPT_EVENT:
            const index = state.eventWaiting.findIndex(e => e._id === action.payload);
            return {
                ...state,
                eventAccepted: [...state.eventAccepted, state.eventWaiting.find(e => e._id === action.payload)],
                eventWaiting: state.eventWaiting.splice(index, 1)
            }
        case REFUSE_EVENT:
            const index = state.eventWaiting.findIndex(e => e._id === action.payload);
            return {
                ...state,
                eventWaiting: state.eventWaiting.splice(index, 1)
            }
        default: return state;
    }
}