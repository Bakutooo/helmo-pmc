import { FETCH_CITIZENS } from "./types";
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