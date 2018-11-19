import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import Home from "./components/Home";
import './index.css';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [{
    path: '/',
    component: Home,
    name: "Home"
  }]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
