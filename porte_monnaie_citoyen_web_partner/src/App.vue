<template>
  <div class="container">
    <Deals />
  </div>
</template>

<script>
import Deals from './components/Deals.vue'

export default {
  name: 'app',
  components: {
    Deals
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
