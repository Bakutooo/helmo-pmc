export default {
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}

const state = {
    partner: null
}

const getters = {
    partner: state => state.partner
}

const actions = {
    fetchPartner({commit}, partner){
        commit('FETCH_PARTNER', partner)
    }
}

const mutations = {
    FETCH_PARTNER(state, payload) {
        state.partner = payload
    }
}