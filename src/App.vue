<template>
  <div id="app">
    <Pnl/>
  </div>
</template>

<script>
import Pnl from './components/Pnl.vue'

export default {
  name: 'app',
  components: {
    Pnl
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
  margin-top: 10px;
}
</style>
