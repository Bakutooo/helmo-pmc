import { FETCH_CITIZEN, SHOW_ERROR, ADD_CITIZEN, LOGOUT_CITIZEN, FETCH_PARTICIPATION_CITIZEN } from "./../actions/types";

const initialState = {
    citizen: null,
    error: "",
    message: "",
    participations: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_CITIZEN: 
            console.log(FETCH_CITIZEN);
            return {
                ...state,
                citizen: action.payload
            }
        case SHOW_ERROR: 
            console.log(SHOW_ERROR);    
            return {
                ...state,
                error: action.payload
            }
        case ADD_CITIZEN:
            console.log(ADD_CITIZEN);
            return {
                ...state,
                message: action.payload
            }
        case LOGOUT_CITIZEN:
            console.log(LOGOUT_CITIZEN);
            return {
                ...state,
                citizen: null
            }
        case FETCH_PARTICIPATION_CITIZEN: 
            console.log(FETCH_PARTICIPATION_CITIZEN);
            return {
                ...state,
                participations: action.payload
            }
        default: return state
    }
}