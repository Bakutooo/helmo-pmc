import { FETCH_ALL_EVENTS, FETCH_EVENT } from "./../actions/types";

const initialState = {
    events: [],
    event: {
        name: "N/C",
        description: "",
        gain: 0,
        address: "",
        town: {
            name: ""
        }
    }
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_ALL_EVENTS: 
            console.log(FETCH_ALL_EVENTS);
            return {
                ...state,
                events: action.payload
            }
        case FETCH_EVENT:
            console.log(FETCH_EVENT);
            return {
                ...state,
                event: state.events.find(e => e._id === action.payload)
            }
        default: return state;
    }
}