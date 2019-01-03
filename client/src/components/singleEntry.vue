<template>
  <div class="single-entry">
    <!-- single entry -->
    <form @submit.prevent="addEntry" v-if="$route.params.tournamentId">
      <input placeholder="Add Player" type="text" v-model="entries.name">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'single',
    data() {
      return {
        entries: {
          name: ""
        }
      }
    },
    computed: {},
    methods: {
      createEntry() {
        this.$store.dispatch('createEntry', this.newEntry)
      },
      addEntry() {
        this.$store.dispatch('editTournament', { entries: this.entries, tId: "$route.params.tournamentId" })
      }
    }
  }

</script>

<style>


</style>