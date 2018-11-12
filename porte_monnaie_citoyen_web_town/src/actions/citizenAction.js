import { FETCH_CITIZENS, DELETE_CITIZEN } from "./types";
import server from './../server-info';

export const fetchCitizens = (town) => dispatch => {
    fetch(server.url + "/town/citizen/" + town)
    .then(res => res.json())
    .then(res => dispatch({
        type: FETCH_CITIZENS,
        payload: res
    }))
    .catch(err => console.log(err));
};

export const deleteCitizen = (citizen) => dispatch => {
    fetch(server.url + "/citizen/" + citizen, {
        method : "DELETE"
    })
    .then(res => dispatch({
        type : DELETE_CITIZEN,
        payload : res
    }))
    .catch(err => console.log(err));
}