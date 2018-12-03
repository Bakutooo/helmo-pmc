/* eslint-disable no-console */
import serverInfo from "../server-info";

export default {
    state: {partner: null, message: ""},
    mutations: {
        FETCH_PARTNER(state, payload) {
            state.partner = payload
        },
        SEND_DEMAND(state, payload){
            state.message = payload
        }
    },
    actions: {
        fetchPartner: ({commit}, payload) => {
            fetch(serverInfo.url + "/partner/connection", serverInfo.postConfig(payload))
            .then(res => res.json())
            .then(res => commit('FETCH_PARTNER', res))
            .catch(err => console.log(err));
            
        },
        sendDemand: ({commit}, payload) => {
            console.log(payload)
            fetch(serverInfo.url + "/partner", serverInfo.postConfig(payload))
            .then(res => res.json())
            .then(res => commit('SEND_DEMAND', res))
            .catch(err => console.log(err));
        } 
    },
};