import { FETCH_EVENT_ACCEPTED, FETCH_EVENT_WAITING, ACCEPT_EVENT, REFUSE_EVENT } from "./types";
import server from './../server-info';

export const fetchEventAccepted = (town) => dispatch => {
    fetch(server.url + "/town/event/" + town)
    .then(res => res.json())
    .then(res => dispatch({
        type: FETCH_EVENT_ACCEPTED,
        payload: res
    }))
    .catch(err => console.log(err));
}

export const fetchEventWaiting = (town) => dispatch => {
    fetch(server.url + "/town/event/request/" + town)
    .then(res => res.json())
    .then(res => dispatch({
        type: FETCH_EVENT_WAITING,
        payload: res
    }))
    .catch(err => console.log(err));
}

export const acceptEvent = (event) => dispatch => {
    fetch(server.url + "/event", server.putConfig({...event, state: "A"}))
    .then(res => res.json())
    .then(res => dispatch({
        type: ACCEPT_EVENT,
        payload: res._id
    }))
    .catch(err => console.log(err));
}

export const refuseEvent = (event) => dispatch => {
    fetch(server.url + "/event", server.putConfig({...event, state: "R"}))
    .then(res => res.json())
    .then(res => dispatch({
        type: REFUSE_EVENT,
        payload: res._id
    }))
    .catch(err => console.log(err));
}