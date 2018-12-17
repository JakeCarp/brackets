<template>
  <div class="active-component">
    <!-- v-for="tournament in tournaments" -->
    <div class="card border-dark mb-3 col-12 tournamentCard">
      <div class="card-header tournamentCard">
        <h5>Tournament name</h5>
      </div>
      <div class="card-body">
        <h4 class="card-title"># of participants, tournament type, round _ of _</h4>
        <p class="card-text">Tournament description</p>
      </div>
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
    computed: {},
    methods: {},
    components: {},
    props: [],
    mounted() {
      this.$store.dispatch("getTourneys")
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