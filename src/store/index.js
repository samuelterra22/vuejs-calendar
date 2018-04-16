import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment-timezone'
import Axios from 'axios'

Vue.use(Vuex)

moment.tz.setDefault('UTC')

export default new Vuex.Store({
  state: {
    currentYear: 2018,
    currentMonth: 4,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    events: [
      {description: 'Random event 1', date: moment('2018-04-06', 'YYYY-MM-DD')},
      {description: 'Random event 2', date: moment('2018-04-15', 'YYYY-MM-DD')},
      {description: 'Random event 3', date: moment('2018-05-14', 'YYYY-MM-DD')}
    ],
    eventFormDate: moment()
  },
  mutations: {
    setCurrentMonth (state, payload) {
      state.currentMonth = payload
    },
    setCurrentYear (state, payload) {
      state.currentYear = payload
    },
    eventFormPos (state, payload) {
      state.eventFormPosX = payload.x
      state.eventFormPosY = payload.y
    },
    eventFormActive (state, payload) {
      state.eventFormActive = payload
    },
    addEvent (state, payload) {
      state.events.push(payload)
    },
    eventFormDate (state, payload) {
      state.eventFormDate = payload
    }
  },
  actions: {
    addEvent (context, payload) {

      return new Promise((resolve, reject) => {
        let obj = {
          description: payload,
          date: context.state.eventFormDate
        }
        Axios.post('/add_event', obj)
          .then(response => {
            if (response.status === 200) {
              context.commit('addEvent', obj)
              resolve()

            } else {
              reject()
            }
          })
      })
    }
  }
})