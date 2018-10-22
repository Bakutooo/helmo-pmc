import {CONNECTION} from './types';

export function connect(login){
    return {
        type : CONNECTION,
        login : login
    };
}