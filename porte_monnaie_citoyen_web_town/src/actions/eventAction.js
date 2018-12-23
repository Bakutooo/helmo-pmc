import { FETCH_EVENT_ACCEPTED, FETCH_EVENT_WAITING, ACCEPT_EVENT, REFUSE_EVENT, DELETE_EVENT } from "./types";
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

export const acceptEvent = (event, gain) => dispatch => {
    fetch(server.url + "/event", server.putConfig({event: {...event, state: "A", gain}}))
    .then(res => res.json())
    .then(res => {
        console.log(res);
        dispatch({
        type: ACCEPT_EVENT,
        payload: res
    })})
    .catch(err => console.log(err));
}

export const refuseEvent = (event, feedback) => dispatch => {
    fetch(server.url + "/smtp", server.postConfig({
        to: event.partner.mail,
        subject: "Refus d'évènement",
        text: feedback
    }));

    fetch(server.url + "/event", server.putConfig({event: {...event, state: "R"}}))
    .then(res => res.json())
    .then(res => dispatch({
        type: REFUSE_EVENT,
        payload: res
    }))
    .catch(err => console.log(err));
}

export const deleteEvent = (event) => dispatch => {
    fetch(server.url + "/event/" + event, {method: "DELETE"})
    .then(res => dispatch({
        type: DELETE_EVENT,
        payload: res
    }))
    .catch(err => console.log(err));
}