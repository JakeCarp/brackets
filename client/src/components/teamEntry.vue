<template>
  <div class="team-entry">
    <!-- team entry -->
    <form @submit.prevent="createEntry" v-if="$route.params.tournamentId">
      <input placeholder="Add Player" type="text" v-model="playerName">
      <input placeholder="Team Name" type="text" v-model="newEntry.name">
      <button type="submit">Submit</button>
      <div v-if="playerName.length > 0">
        <div v-for="player in playersToAdd">
          <p @click="addPlayer(player)">{{player.name}}</p>
        </div>
      </div>
      <p v-for="member in newEntry.members">{{member.name}}</p>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'team',
    data() {
      return {
        newEntry: {
          name: "",
          tournamentId: this.$route.params.tournamentId,
          members: []
        },
        playerName: ""
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
      }
    },
    methods: {
      addPlayer(player) {
        this.newEntry.members.push(player)
        this.playerName = ""
      },
      createEntry() {
        this.$store.dispatch('createEntry', this.newEntry)
      }
    }
  }

</script>

<style>


</style>