<template>
  <div>
    <navbar />
    <div class="join home">
      <form @submit.prevent="getTournamentByEntryCode" v-if="!$route.params.tournamentId">
        <h1>Enter Your Bracket Code Below</h1>
        <input type="text" placeholder="Bracket Code" v-model="entryCode">
        <button type="submit">Submit</button>
      </form>
      <form @submit.prevent="createEntry" v-if="$route.params.tournamentId">
        <input placeholder="Add Player" type="text" v-model="playerName">
        <input placeholder="Team Name" type="text" v-model="newEntry.name" v-if="newEntry.members.length > 1">
        <button type="submit">Submit</button>
        <div v-if="playerName.length > 0">
          <div v-for="player in playersToAdd">
            <p @click="addPlayer(player)">{{player.name}}</p>
          </div>
        </div>
      </form>
      <h5>Members</h5>
      <p v-for="member in newEntry.members">{{member.name}}</p>

    </div>
  </div>
</template>

<script>
  import navbar from "@/components/navbar"
  export default {
    name: 'join',
    mounted() {
      this.$store.dispatch("getAllProfiles")
    },
    data() {
      return {
        entryCode: "",
        playerName: "",
        newEntry: {
          name: "",
          tournamentId: this.$route.params.tournamentId,
          members: []
        }
      }
    },
    computed: {
      profiles() {
        return this.$store.state.profiles
      },
      playersToAdd() {
        var keyword = this.playerName
        var temp = this.profiles
        var players = []
        for (var i = 0; i < temp.length; i++) {
          var player = temp[i]
          var value = player.name.toLowerCase()
          var term = keyword.toLowerCase()
          if (value.indexOf(term) !== -1 && players.length < 20) {
            players.push(player)
          }
        }
        return players
      },
      // entry() {
      //   return this.$store.state.entry
      // }
    },
    methods: {
      addPlayer(player) {
        this.newEntry.members.push(player)
        this.playerName = ""
      },
      getTournamentByEntryCode() {
        this.$store.dispatch('getTournamentByEntryCode', this.entryCode)
      },
      createEntry() {
        this.$store.dispatch('createEntry', this.newEntry)
      }
    },
    components: {
      navbar
    },
    props: [],
  }

</script>

<style>


</style>