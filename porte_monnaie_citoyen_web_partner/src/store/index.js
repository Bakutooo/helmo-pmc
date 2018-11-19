import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

import partner from "./modules/partner";

export default new Vuex.Store({
    modules: {
        partner
    }
});