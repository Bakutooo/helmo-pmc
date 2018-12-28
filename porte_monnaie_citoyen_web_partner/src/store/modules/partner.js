/* eslint-disable no-console */
import serverInfo from "../server-info";

export default {
    state: {partner: null, message: ""},
    mutations: {
        FETCH_PARTNER(state, payload) {
            state.partner = payload;
        },
        SEND_DEMAND(state, payload){
            state.message = payload;
        },
        DECONNECTION(state){
            state.partner = null;
        },
        SHOW_ERROR(state, payload) {
            state.message = payload;
        }
    },
    actions: {
        fetchPartner: ({commit}, payload) => {
            commit('SHOW_ERROR', "");
            fetch(serverInfo.url + "/partner/connection", serverInfo.postConfig(payload))
            .then(res => res.json())
            .then(res =>{
                if(res.hasOwnProperty('error')){
                    commit('SHOW_ERROR', res.error);
                } else {
                    commit('FETCH_PARTNER', res);
                }
            })
            .catch(err => console.log(err));
            
        },
        sendDemand: ({commit}, payload) => {
            console.log(payload);
            commit('SHOW_ERROR', "");
            if(payload.password !== payload.confirmedPassword) commit('SHOW_ERROR', "Les mots de passe ne correspondent pas");
            else {
                fetch(serverInfo.url + "/partner", serverInfo.postConfig(payload))
                .then(res => res.json())
                .then(res => commit('SEND_DEMAND', res))
                .catch(err => console.log(err));
            }
        },
        deconnection: ({commit}) => {
            commit('DECONNECTION')
        }
    },
};