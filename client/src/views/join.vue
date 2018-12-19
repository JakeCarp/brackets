<template>
  <div class="join home">
    <form @submit.prevent="getTournamentByEntryCode">
      <h1>Enter Your Bracket Code Below</h1>
      <input type="text" placeholder="Bracket Code" v-model="entryCode">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'join',
    data() {
      return {
        entryCode: "",
        newEntry: {
          tournamentId: this.$route.params.tournamentId
        }
      }
    },
    computed: {},
    methods: {
      getTournamentByEntryCode() {
        this.$store.dispatch('getTournamentByEntryCode', this.entryCode)
      }
    },
    components: {},
    props: [],
  }

</script>

<style>


</style>