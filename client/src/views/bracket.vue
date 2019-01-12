<template>
  <div>
    <navbar />
    <div class="container-fluid">
      <activeComponent class="row"></activeComponent>
      <singleElimination v-if="tournament.style == 'Single-Elimination'"></singleElimination>
      <roundRobin v-if="tournament.style == 'Round-Robin'"></roundRobin>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 Teams">
            <h1>Competitors</h1>
          </div>
        </div>
        <div class="row">
          <div v-for="entry in schedule.entries" class="card">
            <h2>{{entry.name}}</h2>
            <h4>{{entry.members}}</h4>
          </div>
        </div>
      </div>
      <playerPool> </playerPool>
    </div>
    <Chat />
  </div>
</template>

<script>
  import navbar from "@/components/navbar"
  import playerPool from '@/components/playerPool'
  import activeComponent from "@/components/activeComponent"
  import roundRobin from "@/components/roundRobin"
  import roundRobinSplit from "@/components/roundRobinSplit"
  import singleElimination from "@/components/singleElimination"
  import Chat from "@/components/Chat"

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
      Chat
    },
    computed: {
      tournament() {
        return this.$store.state.tournament
      },
      schedule() {
        return this.$store.state.schedule
      }
    },
    mounted() {
      if (this.$store.state.tournament) {
        this.$store.dispatch("getTournamentById", this.$route.params.tId)
      }
      this.$store.dispatch("getSchedule", this.$route.params.tId)
    },
  }
</script>

<style>
</style>