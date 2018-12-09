<template>
  <div class="container">
    <navbar v-if="partner.partner !== null"/>
    <router-view/>
  </div>
</template>

<script>
import store from "./store";
import Navbar from "./components/Navbar.vue";
import { mapState } from 'vuex';

export default {
  name: 'app',
  components: {navbar: Navbar},
  store,
  computed: {
    ...mapState([
      'partner'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
