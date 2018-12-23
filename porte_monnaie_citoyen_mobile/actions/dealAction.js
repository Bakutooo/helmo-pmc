import { FETCH_DEAL_PARTNER } from "./types";
import server from "./../server-info";

export const fetchDealsPartner = (id) => dispatch => {
    fetch(server.url + "/partner/deal/" + id)
    .then(res => res.json())
    .then(res => {
        res = res.map(e => ({...e, key: e._id}));
        dispatch({
            type: FETCH_DEAL_PARTNER,
            payload: res
        })
    })
    .catch(err => console.log(err));
}

export const buyDeal = (citizen, deal) => {
    fetch(server.url + "/payment", server.postConfig({citizen, deal}))
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}