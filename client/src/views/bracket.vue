<template>
  <div>
    <navbar />
    <div class="container-fluid">
      <activeComponent class="row"></activeComponent>
      <singleElimination v-if="getTournament.style == 'Single-Elimination'"></singleElimination>
      <roundRobin v-if="getTournament.style == 'Round-Robin'"></roundRobin>
      <playerPool> </playerPool>
    </div>
  </div>
</template>

<script>
  import navbar from "@/components/navbar"
  import playerPool from '@/components/playerPool'
  import activeComponent from "@/components/activeComponent"
  import roundRobin from "@/components/roundRobin"
  import roundRobinSplit from "@/components/roundRobinSplit"
  import singleElimination from "@/components/singleElimination"

  export default {
    name: 'bracket',
    data() {
      return {

      }
    },
    components: {
      playerPool,
      navbar,
      activeComponent,
      roundRobin,
      roundRobinSplit,
      singleElimination,
    },
    computed: {
      getTournament() {
        return this.$store.state.tournament
      }
    },
    mounted() {
      this.$store.dispatch("getTournamentById", this.$route.params.tId)
    }
  }
</script>

<style>
</style>