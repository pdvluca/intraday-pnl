<template>
  <div id="app">
    <Pnl :strategies="strategies"/>
  </div>
</template>

<script>
import Pnl from './components/Pnl.vue'
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'app',
  components: {
    Pnl
  },
  props: ['strategies'],
  mounted() {
    console.log("try")
    $.getJSON('sample-data.json', json => {
      console.log(json)
      this.strategies = json
    })
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
