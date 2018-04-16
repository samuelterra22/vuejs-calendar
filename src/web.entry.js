import Vue from 'vue'
import './style.scss'

import Vuex from 'vuex'
import moment from 'moment-timezone'
import App from './components/App.vue'

Vue.use(Vuex)

moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', {get () {return this.$root.moment}})

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store:{
    state:{
      currentYear: 2018,
      currentMonth: 4
    }
  }
})

