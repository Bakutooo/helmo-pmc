/* eslint-disable no-console */
import serverInfo from "../server-info";

export default {
    state: { events: [] },
    getters: {
        allEvents: (state) => state.events
    },
    mutations: {
        FETCH_ALL_EVENTS: (state, payload) => {
            state.events = [...payload];
        },
        ADD_EVENT: (state, payload) => {
            state.events = [...state.events, payload]
        },
        DELETE_EVENT: (state, id) => {
            let index = state.events.findIndex(e => e._id === id);
            let temp = [...state.events];
            temp.splice(index, 1);
            state.events = temp;
        }
    },
    actions: {
        fetchAllEvents: ({ commit }, id) => {
            fetch(serverInfo.url + "/partner/event/" + id, serverInfo.getConfig)
            .then(res => res.json())
            .then(res => commit("FETCH_ALL_EVENTS", res))
            .catch(err => console.log(err))
        },
        addEvent: ({ commit }, event) => {
            fetch(serverInfo.url + "/event", serverInfo.postConfig(event))
            .then(res => res.json())
            .then(res => commit("ADD_EVENT", res))
            .catch(err => console.log(err));
        },
        deleteEvent: ({ commit }, id) => {
            fetch(serverInfo.url + "/event/" + id, serverInfo.deleteConfig)
            .then(res => res.json())
            .then(() => commit("DELETE_EVENT", id))
            .catch(err => console.log(err));
        }
    }
}