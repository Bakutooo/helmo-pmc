import {FETCH_TOWN, SHOW_ERROR, FETCH_PARTNER_DEMANDS} from './types';
import server from '../server-info';

export const fetchTown = (town) => dispatch => {
    console.log(town);
    fetch(server.url + "/town/connection", server.postConfig(town))
    .then(res => res.json())
    .then(res => {
        if(res.hasOwnProperty("error")){
            dispatch({
                type : SHOW_ERROR,
                payload : res.error
            })
        }
        else{
            dispatch({
                type : FETCH_TOWN,
                payload : res
            })
        }
    })
    .catch(err => console.log(err));
}

export const fetchEvents = () => dispatch => {
    console.log(FETCH_PARTNER_DEMANDS);
    fetch(server.url + "/event")
    .then(res => res.json())
    .then(res => {
        console.log(res);
        dispatch({
            type : FETCH_PARTNER_DEMANDS,
            payload : res
        });
    })
    .catch(err => console.log(err));
}