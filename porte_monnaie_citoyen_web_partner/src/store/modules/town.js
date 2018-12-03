/* eslint-disable no-console */
import serverInfo from "../server-info";

export default {
    state: {towns: []},
    mutations: {
        FETCH_ALL_TOWNS: (state, payload) => {
            state.towns = payload;
        }
    },
    actions: {
        fetchAllTowns: ({commit}) => {
            fetch(serverInfo.url + "/town")
            .then(res => res.json())
            .then(res => commit('FETCH_ALL_TOWNS', res))
            .catch(err => console.log(err))
        }
    }
}