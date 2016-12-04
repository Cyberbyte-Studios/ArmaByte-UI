import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  callingAPI: false,
  searching: '',
  serverURI: 'http://localhost',
  token: null,
  userInfo: {
    messages: [],
    notifications: [],
    tasks: [],
    user: {
      id: 1,
      name: 'Logging In',
      email: 'Logging In',
      steam_id: 'Logging In'
    }
  }
}

const mutations = {
  UPDATE_USERINFO (state, userinfo) {
    state.userInfo.user = userinfo.user
    state.userInfo.audits = userinfo.audits.data
    state.userInfo.notifications = userinfo.notifications
  },
  UPDATE_NOTIFICATIONS (state, notifications) {
    state.userInfo.notifications = notifications
  },
  TOGGLE_LOADING (state) {
    state.callingAPI = !state.callingAPI
  },
  TOGGLE_SEARCHING (state) {
    state.searching = (state.searching === '') ? 'loading' : ''
  },
  SET_TOKEN (state, token) {
    state.token = token
  }
}

export default new Vuex.Store({
  state,
  mutations
})
