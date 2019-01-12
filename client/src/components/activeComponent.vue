<template>
  <div class="active-component">

    <!-- v-for="tournament in tournaments" -->
    <div class="card border-dark mb-3 col-12 tournamentCard">
      <div class="card-header tournamentCard">
        <h5>{{tournament.title}}</h5>
      </div>
      <div class="card-body">
        <router-link :to="{name: 'testBracket', params: {tId: tournament._id}}"><button type="button" class="btn btn-outline-primary">View
            Bracket</button></router-link>

        <h4 class="card-title">{{tournament.style}}</h4>
        <p class="card-text">{{tournament.description}}</p>
      </div>
    </div>
    <button v-if="user._id == tournament.owner" @click="deleteTournament">Delete Tournament</button>
    <button @click="archive" v-if="user._id == tournament.owner">Archive Tournament</button>
    <div class="dropdown">
      <!-- <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Change Tournament Name
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <form @submit.prevent="editTournament">
          <input type="text" v-model="editTournament.title" placeholder="New Tournament Name"></form>
      </div> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'active-component',
    data() {
      return {

      }
    },
    computed: {
      tournament() {
        console.log(this.$store.state.tournament)
        return this.$store.state.tournament
      },
      user() {
        return this.$store.state.user
      },
      getArchive() {
        console.log(this.$store.state.archived)
        return this.$store.state.archived
      }
    },
    methods: {
      deleteTournament() {

        this.$store.dispatch('deleteTournament', this.tournament._id)

      },
      editTournament() {
        this.$store.dispatch('editTournament', { tournament: this.title })
      },
      archive() {
        this.$store.dispatch('archiveTournament', this.tournament._id)
      }
    },
    components: {},
    props: [],
    mounted() {
      // debugger
    }
  }

</script>

<style>
  .tournamentCard {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>