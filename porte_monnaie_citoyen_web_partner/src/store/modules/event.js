/* eslint-disable no-console */
import serverInfo from "../server-info";

export default {
    state: { events: [] },
    mutations: {
        FETCH_ALL_EVENTS: (state, payload) => {
            state.events = payload;
        }
    },
    actions: {
        fetchAllEvents: ({ commit }, id) => {
            fetch(serverInfo.url + "/partner/event/" + id)
            .then(res => res.json())
            .then(res => commit("FETCH_ALL_EVENTS", res))
            .catch(err => console.log(err))
        }
    }
}