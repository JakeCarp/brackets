<template>
  <div class="history-component">

    <!-- v-for="tournament in tournaments" -->
    <div class="card border-dark mb-3 col-12 tournamentCard" v-if="tournament.archived == true">
      <div class="card-header tournamentCard">
        <h5>{{tournament.title}}</h5>
      </div>
      <div class="card-body">
        <h4 class="card-title">{{tournament.style}}</h4>
        <p class="card-text">{{tournament.description}}</p>
      </div>
    </div>
    <button v-if="user._id == tournament.owner" @click="deleteTournament">Delete Tournament</button>
    <div class="dropdown">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="false">
        Dropdown button
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <form @submit.prevent="editTournament">
          <input type="text" placeholder="New Tournament Name"></form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'history-component',
    data() {
      return {

      }
    },
    computed: {
      tournaments() {
        this.$store.state.tournaments
      }
    },
    methods: {
    }
  }

</script>

<style>


</style>