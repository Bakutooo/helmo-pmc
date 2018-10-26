import { FETCH_ALL_PARTNERS, FETCH_PARTNER } from "./types";
import server from './../server-info';

export const fetchAllPartners = () => dispatch => {
    fetch(server.url + "/partner")
    .then(res => res.json())
    .then(res => dispatch({
        type: FETCH_ALL_PARTNERS,
        payload: res
    }))
    .catch(err => console.log(err));
}