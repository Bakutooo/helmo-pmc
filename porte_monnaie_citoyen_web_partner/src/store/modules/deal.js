/* eslint-disable no-console */
import serverInfo from "../server-info";

export default {
    state: {deals: []},
    getters: {
        dealStopped: (state) => state.deals.filter(e => e.state === 'N'),
        dealOnGoing: (state) => state.deals.filter(e => e.state === 'O'),
    },
    mutations: {
        FETCH_ALL_DEALS: (state, payload) => {
            state.deals = payload;
        },
        ADD_DEAL: (state, payload) => {
            state.deals = [...state.deals, payload];
        },
        UPDATE_DEAL: (state, payload) => {
            let index = state.deals.findIndex(e => e._id === payload._id);
            let temp = [...state.deals];
            temp[index].state = payload.state;
            state.deals = temp;
        }
    },
    actions: {
        fetchAllDeals: ({commit}, id) => {
            fetch(serverInfo.url + "/partner/deal/" + id, serverInfo.getConfig)
            .then(res => res.json())
            .then(res => commit('FETCH_ALL_DEALS', res))
            .catch(err => console.log(err))
        },
        addDeal: ({ commit }, deal) => {
            fetch(serverInfo.url + "/deal", serverInfo.postConfig(deal))
            .then(res => res.json())
            .then(res => commit('ADD_DEAL', res))
            .catch(err => console.log(err))
        },
        updateDeal: ({ commit }, id) => {
            console.log(id);
            fetch(serverInfo.url + '/deal', serverInfo.putConfig({deal: {_id: id, state: "N"}}))
            .then(res => res.json())
            .then(() => commit("UPDATE_DEAL", {_id: id, state: "N"}))
            .catch(err => console.log(err))
        }
    }
}