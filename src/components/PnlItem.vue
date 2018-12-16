<template lang="html">
  <div class="col s4" style="padding:2px">
    <div class="grid">
      <div class="col s6 grey lighten-1 white-text z-depth-2" >{{name}}</div>
      <div :class="className">{{value}}</div>
    </div>
  </div>
</template>
<script>

import formatting from '../formatting'

export default {
  name: 'pnlitem',
  props: ['name', 'value'],
  components: {
  },
  data() {
    return {
    }
  },
  computed: {
    className: function() {
      return "col s6 " + formatting.backgroundClass(this.value) + " z-depth-2"
    }
  }
}
</script>
