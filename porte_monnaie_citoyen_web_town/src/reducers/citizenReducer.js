import { FETCH_CITIZENS, DELETE_CITIZEN } from "./../actions/types";

const initialState = {
    citizens: []
}

export default (state = initialState, action) => {
    let index;
    let temp;
    switch(action.type){
        case FETCH_CITIZENS:
            return {
                ...state,
                citizens: action.payload
            }
        
        case DELETE_CITIZEN:
            index = state.citizens.findIndex(c => c._id === action.payload);
            temp = [...state.citizens];
            temp.splice(index, 1);
            return {
                ...state,
                citizens : temp
            }
        default: return state;
    }
}