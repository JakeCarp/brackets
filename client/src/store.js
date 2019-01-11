import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'
import { stat } from 'fs';

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
    profiles: [],
    user: {},
    schedule: {},
    tournament: {},
    testTournament: {
      entries: ["player 1", "player 2", "player 3", "player 4", "player 5", "player 6", "player 7", "player 8", "player 9", "player 10", "player 11", "player 12", "player 13", "player 14", "player 15", "player 16", "player 17"]
    },
    entry: {},
    entries: [],
    tournaments: [],
    bracketArray: [],
    archived: [],
    ownedTournaments: [],
    bracketArray: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
      // console.log(user)
    },
    setTournament(state, tournament) {
      state.tournament = tournament
    },
    setTournamentById(state, tournament) {
      state.tournament = tournament
    },
    setTournaments2(state, tournaments) {
      state.tournaments = tournaments
    },
    setEntry(state, entry) {
      // debugger
      state.entry = entry
      // console.log(entry)
    },
    setProfiles(state, profiles) {
      state.profiles = profiles
    },
    setBracketArray(state, bracketArray) {
      state.bracketArray = bracketArray
    },
    setSchedule(state, schedule) {
      state.schedule = schedule
    },
    setArchive(state, archive) {
      state.archived = archive

    },
    setOwnedTournaments(state, owned) {
      // debugger
      state.ownedTournaments = owned
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
          // router.push({ name: 'home' })
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
          commit('setUser', res.data)
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
    getTournamentById({ commit, dispatch }, id) {
      // debugger
      api.get('tournament/' + id)
        .then(res => {
          commit('setTournamentById', res.data)
        })
    },
    getTournaments2({ commit, dispatch }, uid) {
      // debugger
      api.get('entry/' + uid)
        .then(res => {
          // debugger
          dispatch('getTournament', res.data)
        })
    },
    getOwnedTournaments({ commit, dispatch }, uid) {
      // debugger
      api.get('tournament/' + uid + "/owner")
        .then(res => {
          // debugger 
          dispatch('getOwnedTournaments2', res.data)
        })
    },
    // getTournament({ commit, dispatch }, tournamentId) {
    //   api.get('tournament/' + tournamentId)
    //     .then(res => {
    //       commit('setTournament', res.data)
    //     })
    // },
    getOwnedTournaments2({ commit, dispatch }, tournamentIds) {
      // debugger
      let output = []
      for (let i = 0; i < tournamentIds.length; i++) {
        api.get('tournament/' + tournamentIds[i])
          .then(res => {
            output.push(res.data)
          })
      }
      // debugger
      commit('setOwnedTournaments', output)
    },
    getTournament({ commit, dispatch }, tournamentIds) {
      // debugger
      let output = []
      for (let i = 0; i < tournamentIds.length; i++) {
        api.get('tournament/' + tournamentIds[i])
          .then(res => {
            output.push(res.data)
          })
      }
      commit('setTournaments2', output)
    },
    addTournament({ commit, dispatch }, tournamentData) {
      // debugger
      api.post('tournament', tournamentData)
        .then(tournament => {
          router.push({ name: 'bracket', params: { tId: tournament.data._id } })
          // debugger
          commit('setTournament', tournament.data)
        })
    },
    deleteTournament({ commit, dispatch }, tournamentId) {
      api.delete('tournament/' + tournamentId)
        .then(res => {
          router.push({ name: 'home' })
          dispatch('getTournament')
        })
    },
    editTournamentowner({ commit, dispatch }, tournamentId) {
      api.put('tournament/' + tournamentId + '/userId')
        .then(res => {
          dispatch('getTournament')
        })
    },
    editTournament({ commit, dispatch }, payload) {

      api.put('tournament/' + payload.tId)
        .then(res => {
          dispatch('getTournament')
        })
    },
    getTournamentByEntryCode({ commit, dispatch }, entryCode) {
      // debugger
      api.get('tournament/join/' + entryCode)
        .then(tournament => {
          router.push({ name: 'join', params: { tournamentId: tournament.data._id } })
          commit("setTournament", tournament.data)
        })
    },
    addNewOwnerEntry({ commit, dispatch }, newEntry) {
      api.post('entry/ownerEntry', newEntry)
        .then(res => {
          commit('setEntry, res.data')
        })
    },
    createEntry({ commit, dispatch }, newEntry) {
      // debugger
      api.post('entry/', newEntry)
        .then(res => {
          //getEntries doesnt exist in this version of this file
          // dispatch('getEntries', newEntry._id)
          commit('setEntry', res.data)
        })
    },
    getAllProfiles({ commit, dispatch }) {
      api.get('entry/')
        .then(res => {
          commit('setProfiles', res.data)
        })
    },
    getSchedule({ commit, dispatch }, tournamentId) {
      api.get('tournament/' + tournamentId + '/entries')
        .then(res => {
          commit("setSchedule", res.data)
        })
    }, archiveTournament({ commit, dispatch }, tournamentId) {
      api.put('tournament/' + tournamentId + '/archive')
        .then(res => {
          commit('setArchive', res.data)

        })
    },







    //testing tourney generation
    //finding the sweetSpot 
    // calcPreGames({ commit, dispatch }, payload) {
    //   for (let i = 0; i < payload.sweetSpots.length; i++) {
    //     if (payload.sweetSpots[i] > payload.entries) {
    //       return payload.sweetSpots[i - 1]
    //     }
    //   }
    // },

    //making the tree
    buildTree({ commit, dispatch }, payload) {
      // debugger
      let arr = payload.entries
      let sweetSpot = 0
      function calcPreGames() {
        for (let i = 0; i < payload.sweetSpots.length; i++) {
          console.log(payload.sweetSpots[i])
          if (payload.sweetSpots[i] > payload.entries.length) {
            return sweetSpot = payload.sweetSpots[i - 1]
          }
        }
      }
      calcPreGames()
      let root = {
        text: { name: "winner" },
        HTMLid: 'node-WINNER'
      }
      let preGamesNeeded = arr.length - sweetSpot
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
        let preGameCompetitors = []
        for (let pg = 1; pg <= preGamesNeeded; pg++) {
          preGameCompetitors.push({ text: { name: "pregame " + pg } }, { text: { name: "pregame " + pg } })
        }
        let parentCount = 0
        for (let i = 0; i < preGameCompetitors.length; i += 2) {
          preGameCompetitors[i].parent = tree[tree.length - 1][parentCount]
          preGameCompetitors[i + 1].parent = tree[tree.length - 1][parentCount]
          parentCount++
        }
        tree.push(preGameCompetitors)
      }
      assignPreGames()

      function buildRound(competitors, round, roundNum) {
        for (var i = 0; i < competitors; i++) {
          let node = {
            text: { name: "match " + (i + 1) + ' round ' + roundNum },
            HTMLid: `node-${roundNum}-${i + 1}`,
          }
          round.push(node)
        }
        return round
      }

      let bracketArray = [].concat(...tree)

      for (let b = 0; b < arr.length; b++) {
        const person = arr[b];
        bracketArray[(bracketArray.length - 1) - b].text.name = person
      }
      commit('setBracketArray', bracketArray)
    }


    // router.push({ name: 'join', params: { entryCode: entryCode } })
  }
})
//       //testing tourney generation
//       //finding the sweetSpot 
//       calcPreGames({ commit, dispatch }, payload) {
//       debugger
//       for (let i = 0; i < payload.sweetSpots.length; i++) {
//         if (payload.sweetSpots[i] > payload.entries) {
//           return payload.sweetSpots[i - 1]
//         }
//       }
//     },


// //     //making the tree
// //     buildTree({ commit, dispatch }, arr) {
// //       let root = { text: { name: "winner" } }
// //       let preGamesNeeded = arr.length - dispatch('calcPreGames'(sweetSpots, arr.length))
// //       let tree = []

// //       let competitors = arr.length - preGamesNeeded
// //       let i = 1
// //       let buyInstance = 0
// //       while (competitors > 1) {
// //         let round = []
// //         tree.push(buildRound(competitors, round, i))
// //         competitors = round.length / 2
// //         i++
// //       }

// //       function assignParents() {
// //         tree.push([root])
// //         tree.reverse()
// //         console.log(tree)
// //         debugger
// //         let nextRound = []
// //         for (let j = tree.length - 1; j > 0; j--) {
// //           const currRound = tree[j];
// //           nextRound = tree[j - 1]

// //           let pi = 0
// //           for (let z = 0; z < currRound.length; z += 2) {
// //             let currentP = nextRound[pi]
// //             const entry1 = currRound[z];
// //             const entry2 = currRound[z + 1];
// //             entry1.parent = currentP
// //             if (entry2) {
// //               entry2.parent = currentP
// //             }
// //             pi++
// //           }
// //         }
// //       }
// //       assignParents()

// //       function assignPreGames() {
// //         let preGames = []
// //         for (let pg = 1; pg <= preGamesNeeded; pg++) {
// //           preGames.push({ text: { name: "pregame " + pg } }, { text: { name: "pregame " + pg } })
// //         }
// //         let parentCount = 0
// //         for (let i = 0; i < preGames.length; i += 2) {
// //           preGames[i].parent = tree[tree.length - 1][parentCount]
// //           preGames[i + 1].parent = tree[tree.length - 1][parentCount]
// //           parentCount++
// //         }
// //         tree.push(preGames)
// //       }
// //       assignPreGames()

// //       function buildRound(competitors, round, roundNum) {
// //         for (var i = 0; i < competitors; i++) {
// //           round.push({ text: { name: "match " + (i + 1) + ' round ' + roundNum } })
// //         }
// //         return round
// //       }

// //       let bracketArray = [].concat(...tree)

// //       for (let b = 0; b < arr.length; b++) {
// //         const person = arr[b];
// //         bracketArray[(bracketArray.length - 1) - b].text.name = person
// //       }
// //       return { tree, bracketArray }
// //     }


// //     // router.push({ name: 'join', params: { entryCode: entryCode } })
// // )}
