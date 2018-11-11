import { FETCH_PARTNER_ACCEPTED, FETCH_PARTNER_WAITING, ACCEPT_PARTNER, REFUSE_PARTNER } from "./types";
import server from './../server-info';

export const fetchPartnerAccepted = (town) => dispatch => {
    fetch(server.url + "/town/partner/" + town)
    .then(res => res.json())
    .then(res => dispatch({
        type: FETCH_PARTNER_ACCEPTED,
        payload: res
    }))
    .catch(err => console.log(err));
}

export const fetchPartnerWaiting = (town) => dispatch => {
    fetch(server.url + "/town/partner/request/" + town)
    .then(res => res.json())
    .then(res => dispatch({
        type: FETCH_PARTNER_WAITING,
        payload: res
    }))
    .catch(err => console.log(err));
}

export const acceptPartner = (partner) => dispatch => {
    fetch(server.url + "/partner", server.putConfig({...partner, state: "A"}))
    .then(res => res.json())
    .then(res => dispatch({
        type: ACCEPT_PARTNER,
        payload: res._id
    }))
    .catch(err => console.log(err));
}

export const refusePartner = (partner) => dispatch => {
    fetch(server.url + "/partner", server.putConfig({...partner, state: "R"}))
    .then(res => res.json())
    .then(res => dispatch({
        type: REFUSE_PARTNER,
        payload: res._id
    }))
    .catch(err => console.log(err));
}