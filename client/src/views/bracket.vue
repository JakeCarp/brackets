<template>
  <div>
    <navbar />
    <activeComponent class="row"></activeComponent>
    <singleElimination v-if="tournament.style == 'Single-Elimination'" />
    <roundRobin v-if="tournament.style == 'Round-Robin'" />
    <playerPool> </playerPool>
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
  }
</script>

<style>
</style>