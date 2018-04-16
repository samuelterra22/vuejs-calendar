import Vue from 'vue'
import './style.scss'

import store from './store'

import moment from 'moment-timezone'
import App from './components/App.vue'

moment.tz.setDefault('UTC')
Object.defineProperty(Vue.prototype, '$moment', {get () {return this.$root.moment}})

let events = [
  {description: 'Random event 1', date: moment('2018-04-06', 'YYYY-MM-DD')},
  {description: 'Random event 2', date: moment('2018-04-15', 'YYYY-MM-DD')},
  {description: 'Random event 3', date: moment('2018-05-14', 'YYYY-MM-DD')}
]

let initialState = Object.assign({}, store.state, {events})
console.log(initialState)
store.replaceState(initialState)

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App
  },
  store
})

