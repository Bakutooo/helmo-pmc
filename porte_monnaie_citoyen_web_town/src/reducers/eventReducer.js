import { FETCH_EVENT_ACCEPTED, FETCH_EVENT_WAITING, ACCEPT_EVENT, REFUSE_EVENT, DELETE_EVENT } from "./../actions/types";

const initialState = {
    eventsAccepted: [],
    eventsWaiting: []
}

export default (state = initialState, action) => {
    let index;
    let temp;
    switch(action.type){
        case FETCH_EVENT_ACCEPTED:
            return {
                ...state,
                eventsAccepted: action.payload
            }
        case FETCH_EVENT_WAITING:
            return {
                ...state,
                eventsWaiting: action.payload
            }
        case ACCEPT_EVENT:
            index = state.eventsWaiting.findIndex(e => e._id === action.payload);
            temp = [...state.eventsWaiting];
            temp.splice(index, 1);
            return {
                ...state,
                eventsAccepted: [...state.eventsAccepted, {...state.eventsWaiting[index], state: "A"}],
                eventsWaiting: temp
            }
        case REFUSE_EVENT:
            index = state.eventsWaiting.findIndex(e => e._id === action.payload);
            temp = [...state.eventsWaiting];
            temp.splice(index, 1);
            return {
                ...state,
                eventsWaiting: temp
            }
        case DELETE_EVENT:
            index = state.eventsAccepted.findIndex(e => e._id === action.payload);
            temp = [...state.eventsAccepted];
            temp.splice(index, 1);
            return {
                ...state,
                eventsAccepted: temp
            }
        default: return state;
    }
}