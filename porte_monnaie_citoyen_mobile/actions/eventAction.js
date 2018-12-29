import { FETCH_ALL_EVENTS, FETCH_EVENT, FETCH_ALL_PARTICIPATION_CITIZEN } from "./types";
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

export const participateEvent = (citizen, event, password) => dispatch => {
    fetch(server.url + "/participation", server.postConfig({citizen, event, password}))
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

export const completeEvent = (citizen, event, password, id) => dispatch => {
    fetch(server.url + "/participation/complete/" + id, server.postConfig({citizen, event, password}))
    .then(res => res.json())
    .then(res =>
        dispatch({
            type: FETCH_ALL_PARTICIPATION_CITIZEN,
            payload: citizen._id
        })
    )
    .catch(err => console.log(err));
}