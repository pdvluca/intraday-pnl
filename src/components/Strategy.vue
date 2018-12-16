<template lang="html">
  <li>
    <div :class="background_class"><b>{{strategy_name}}</b><span style="margin-left:20px">{{strategy_pnl}}%</span></div>
    <div class="collapsible-body">
      <div class="container">
        <div class="row">
          <div class="col s12 left-align" style="font-family: monospace;">Predictors</div>
          <pnlitem v-for="p in predictors_values" :name="p[0]" :value="p[1]" />
          <div class="col s12 left-align" style="font-family: monospace; margin-top:3px">Countries exposure</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">UK</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">DE</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">FR</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">ES</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">FI</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">SE</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">DK</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">NO</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">PT</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">GR</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">NL</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s12 left-align" style="font-family: monospace; margin-top:3px">FX exposure</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">EUR</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">GBP</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">NOK</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">SEK</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">DKK</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s12 left-align" style="font-family: monospace; margin-top:3px">Factors</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">Cash</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
          <div class="col s2 grey lighten-1 white-text z-depth-2" style="margin-top:4px">Beta</div>
          <div class="col s2 red darken-1 white-text text-darken-2 z-depth-2" style="margin-top:4px">-0.15</div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import formatting from '../formatting'
import pnlitem from './PnlItem.vue'
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'strategy',
  props: ['strategy'],
  components: {
    pnlitem
  },
  data() {
    return {

    }
  },
  computed: {
    strategy_name: function () {
      return this.strategy.strategy_name
    },
    strategy_pnl: function () {
      return this.strategy.strategy_pnl
    },
    predictors_values: function () {
      var predictors = this.strategy.pnl_group.predictors;
      var values = [];
      $.each( predictors, function( key, value ) {
        values.push([key, value])
      });
      return values
    },
    background_class: function () {
      var pnl = this.strategy.strategy_pnl;
      return "collapsible-header " + formatting.backgroundClass(pnl)
    }
  }
};
</script>
