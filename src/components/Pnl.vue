<template lang="html">
  <ul class="collapsible expandable">
    <strategy v-for="s in strategies" :strategy="s" />
  </ul>
</template>


<style>
.collapsible-body {
  padding: 0px;
}
</style>

<script>
import strategy from './Strategy.vue'
import JQuery from 'jquery'
import M from 'materialize-css'
let $ = JQuery

export default {
  name: 'Pnl',
  components: {
    strategy
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: ['strategies']
};

$(document).ready(function(){
  var elem = document.querySelector('.collapsible.expandable');
  var instance = M.Collapsible.init(elem, {
   accordion: false
  });
 });
</script>
