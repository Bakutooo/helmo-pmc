import { FETCH_ALL_PARTNERS, FETCH_PARTNER } from "./types";
import server from './../server-info';

export const fetchAllPartners = () => dispatch => {
    fetch(server.url + "/partner/accepted")
    .then(res => res.json())
    .then(res => {
        res = res.map(e => ({...e, key: e._id}));
        dispatch({
            type: FETCH_ALL_PARTNERS,
            payload: res
        })
    })
    .catch(err => console.log(err));
}

export const fetchPartner = (id) => dispatch => {
    dispatch({
        type: FETCH_PARTNER,
        payload: id
    })
}