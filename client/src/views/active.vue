<template>
  <div class="active container-fluid home">
    <roundRobin v-if="tournament.style == 'Round-Robin'" />
    <activeComponent class="row"></activeComponent>
  </div>
</template>

<script>
  import activeComponent from "@/components/activeComponent"
  import roundRobin from "@/components/roundRobin"
  import roundRobinSplit from "@/components/roundRobinSplit"

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
      roundRobinSplit
    },
    props: [],
  }

</script>

<style>
  .card-header {
    width: 100vw;
  }
</style>