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
    tournament: {
      entries: ["player 1", "player 2", "player 3", "player 4", "player 5", "player 6", "player 7", "player 8", "player 9", "player 10", "player 11", "player 12", "player 13", "player 14", "player 15", "player 16", "player 17"]
    },
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
    getTournaments({ commit, dispatch }) {

      api.get('tournament/')
        .then(res => {
          commit('setTournament', res.data)
        })
    },

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
    },
    getTournamentByEntryCode({ commit, dispatch }, entryCode) {
      debugger
      api.get('join/' + entryCode)
        .then(tournament => {
          router.push({ name: 'join', params: { tournamentId: tournament.data._id } })
          dispatch('joinTournament', tournament.data)
        })
    },
    joinTournament({ commit, dispatch }, tournament) {
      api.put('/:tournamentId', tournament)
        .then(tournament => {
          dispatch('getTournament')
        })
    },





    //testing tourney generation
    //finding the sweetSpot 
    calcPreGames({ commit, dispatch }, payload) {
      debugger
      for (let i = 0; i < payload.sweetSpots.length; i++) {
        if (payload.sweetSpots[i] > payload.entries) {
          return payload.sweetSpots[i - 1]
        }
      }
    },


    //making the tree
    buildTree({ commit, dispatch }, arr) {
      let root = { text: { name: "winner" } }
      let preGamesNeeded = arr.length - dispatch('calcPreGames'(sweetSpots, arr.length))
      let tree = []

      let competitors = arr.length - preGamesNeeded
      let i = 1
      let buyInstance = 0
      while (competitors > 1) {
        let round = []
        tree.push(buildRound(competitors, round, i))
        competitors = round.length / 2
        i++
      }

      function assignParents() {
        tree.push([root])
        tree.reverse()
        console.log(tree)
        debugger
        let nextRound = []
        for (let j = tree.length - 1; j > 0; j--) {
          const currRound = tree[j];
          nextRound = tree[j - 1]

          let pi = 0
          for (let z = 0; z < currRound.length; z += 2) {
            let currentP = nextRound[pi]
            const entry1 = currRound[z];
            const entry2 = currRound[z + 1];
            entry1.parent = currentP
            if (entry2) {
              entry2.parent = currentP
            }
            pi++
          }
        }
      }
      assignParents()

      function assignPreGames() {
        let preGames = []
        for (let pg = 1; pg <= preGamesNeeded; pg++) {
          preGames.push({ text: { name: "pregame " + pg } }, { text: { name: "pregame " + pg } })
        }
        let parentCount = 0
        for (let i = 0; i < preGames.length; i += 2) {
          preGames[i].parent = tree[tree.length - 1][parentCount]
          preGames[i + 1].parent = tree[tree.length - 1][parentCount]
          parentCount++
        }
        tree.push(preGames)
      }
      assignPreGames()

      function buildRound(competitors, round, roundNum) {
        for (var i = 0; i < competitors; i++) {
          round.push({ text: { name: "match " + (i + 1) + ' round ' + roundNum } })
        }
        return round
      }

      let bracketArray = [].concat(...tree)

      for (let b = 0; b < arr.length; b++) {
        const person = arr[b];
        bracketArray[(bracketArray.length - 1) - b].text.name = person
      }
      return { tree, bracketArray }
    }


    // router.push({ name: 'join', params: { entryCode: entryCode } })
  }
})