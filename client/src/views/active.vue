<template>
  <div>
    <navbar />
    <div class="active container-fluid home">
      <singleElimination v-if="tournament.style == 'Single-Elimination'" />
      <roundRobin v-if="tournament.style == 'Round-Robin'" />
      <activeComponent class="row"></activeComponent>
    </div>
  </div>
</template>

<script>
  import navbar from "@/components/navbar"
  import activeComponent from "@/components/activeComponent"
  import roundRobin from "@/components/roundRobin"
  import roundRobinSplit from "@/components/roundRobinSplit"
  import singleElimination from "@/components/singleElimination"

  export default {
    name: 'active',
    data() {
      return {

      }
    },
    mounted() {
      this.$store.dispatch("getSchedule", this.$route.params.tournamentId)
    },
    computed: {
      tournament() {
        return this.$store.state.tournament
      },
      schedule() {
        return this.$store.state.tournament
      }
    },
    methods: {},
    components: {
      activeComponent,
      roundRobin,
      roundRobinSplit,
      singleElimination,
      navbar
    },
    props: [],
  }

</script>

<style>
  .card-header {
    width: 100vw;
  }
</style>