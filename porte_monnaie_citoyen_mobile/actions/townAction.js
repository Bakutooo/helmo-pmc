import { FETCH_ALL_TOWNS } from "./types";
import server from "./../server-info";

export const fetchAllTowns = () => dispatch => {
    fetch(server.url + "/town")
    .then(res => res.json())
    .then(res => dispatch({
        type: FETCH_ALL_TOWNS,
        payload: res
    }))
    .catch(err => console.log(err));
}