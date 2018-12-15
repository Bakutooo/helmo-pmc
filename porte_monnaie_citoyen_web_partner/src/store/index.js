import Vuex from "vuex";
import partner from "./modules/partner";
import town from "./modules/town";
import event from "./modules/event";
import deal from './modules/deal';

export default new Vuex.Store({
    modules: {
        partner,
        town,
        event,
        deal
    }
});