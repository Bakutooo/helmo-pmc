import Vuex from "vuex";
import partner from "./modules/partner";
import town from "./modules/town";

export default new Vuex.Store({
    modules: {
        partner,
        town
    }
});