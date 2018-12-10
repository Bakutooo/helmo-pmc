import Vuex from "vuex";
import partner from "./modules/partner";
import town from "./modules/town";
import event from "./modules/event";

export default new Vuex.Store({
    modules: {
        partner,
        town,
        event
    }
});