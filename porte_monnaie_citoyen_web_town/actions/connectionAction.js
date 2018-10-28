import {FETCH_TOWN} from './types';
import server from '../server-info';

export const fetchTown = (town) => dispatch =>{
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