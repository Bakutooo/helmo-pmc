/* eslint-disable no-console */
import serverInfo from "../server-info";

export default {
    state: {deals: []},
    mutations: {
        FETCH_ALL_DEALS: (state, payload) => {
            state.deals = payload;
        },
        ADD_DEAL: (state, payload) => {
            state.deals = [...state.deals, payload];
        },
        DELETE_DEAL: (state, payload) => {
            let index = state.deals.findIndex(e => e._id === payload);
            let temp = [...state.deals];
            temp.splice(index, 1);
            state.deals = temp;
        }
    },
    actions: {
        fetchAllDeals: ({commit}, id) => {
            fetch(serverInfo.url + "/partner/deal/" + id)
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
        deleteDeal: ({ commit }, id) => {
            fetch(serverInfo.url + '/deal/' + id, {method: "DELETE"})
            .then(res => res.json())
            .then(res => commit("DELETE_DEAL", res))
            .catch(err => console.log(err))
        }
    }
}