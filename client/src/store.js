import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

let baseUrl = '//localhost:3000/'



let auth = Axios.create({
  baseURL: baseUrl + "auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: baseUrl + "api/",
  timeout: 3000,
  withCredentials: true
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    tournament: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setTournament(state, tournament) {
      state.tournament = tournament
    }

  },
  actions: {
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
        })
        .catch(() => { router.push({ name: 'login' }) })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'home' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          commit('setUser')
        })
      router.push({ name: 'login' })
    },

    //tournaments
    getTournament({ commit, dispatch }, tournamentId) {

      api.get('tournament/' + tournamentId)
        .then(res => {
          commit('setTournament', res.data)
        })
    },
    addTournament({ commit, dispatch }, tournamentData) {
      api.post('tournament', tournamentData)
        .then(tournament => {
          router.push({ name: 'active', params: { tournamentId: tournament.data._id } })
          dispatch('getTournament', tournament.data._id)

        })
    },
    deleteTournament({ commit, dispatch }, tournamentId) {
      api.delete('tournament/' + tournamentId)
        .then(res => {
          router.push({ name: 'home' })
          dispatch('getTournament')
        })
    },
    editTournament({ commit, dispatch }, tournamentId) {
      api.put('tournament/' + tournamentId)
        .then(res => {
          dispatch('getTournament')
        })
    }



  }
})
