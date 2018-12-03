export default {
    state: { count: 0},
    mutations: {
        INCREMENT: (state, payload) => {
            state.count++;
            alert(payload);
        }
    },
    getters: {
        doubleCount(state){
            return state.count * 2;
        }
    },
    actions: {
        increment: ({commit}, payload) => {
            commit("INCREMENT", payload);
        },
    }
}