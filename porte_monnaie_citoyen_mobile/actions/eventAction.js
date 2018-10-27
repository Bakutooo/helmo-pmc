import { FETCH_ALL_EVENTS, FETCH_EVENT } from "./types";
import server from "./../server-info";

export const fetchAllEvents = () => dispatch => {
    fetch(server.url + "/event")
    .then(res => res.json())
    .then(res => {
        res = res.map(e => ({...e, key: e._id}));
        dispatch({
            type: FETCH_ALL_EVENTS,
            payload: res
        })
    })
    .catch(err => console.log(err));
}

export const fetchEvent = (id) => dispatch => {
    dispatch({
        type: FETCH_EVENT,
        payload: id
    });
}