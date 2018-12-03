import Vue from 'vue';
import Vuex from "vuex";
import VueRouter from "vue-router";
import Home from "./components/Home";
import './index.css';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
  mode: "history",
  routes: [{
    path: '/',
    component: Home,
    name: "Home"
  }]
})

new Vue({
  render: h => h(require("./App.vue").default),
  router
}).$mount('#app')
