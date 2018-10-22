import {CONNECTION} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
    switch(action.type){
        case CONNECTION:
            Console.log("Connection");
            return state;
    }
    return state;
}