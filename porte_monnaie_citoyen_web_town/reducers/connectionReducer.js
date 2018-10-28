import {FETCH_TOWN} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_TOWN:
            Console.log(FETCH_TOWN);
            return {
                ...state,
                citizen : action.payload
            }
    }
    return state;
}