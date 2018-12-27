import { FETCH_ALL_EVENTS, FETCH_EVENT } from "./types";
import server from "./../server-info";

export const fetchAllEvents = () => dispatch => {
    fetch(server.url + "/event")
    .then(res => res.json())
    .then(res => {
        res = res.filter(e => e.state === "A");
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

export const participateEvent = (citizen, event, password) => {
    fetch(server.url + "/participation", server.postConfig({citizen, event, password}))
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}