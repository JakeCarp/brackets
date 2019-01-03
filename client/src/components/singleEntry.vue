<template>
  <div class="single-entry">
    <!-- single entry -->
    <form @submit.prevent="createEntry" v-if="$route.params.tournamentId">
      <input placeholder="Add Player" type="text" v-model="newEntry.name">
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'single',
    data() {
      return {
        newEntry: {
          name: "",
          tournamentId: this.$route.params.tournamentId,
          members: []
        }
      }
    },
    computed: {},
    methods: {
      createEntry() {
        this.$store.dispatch('createEntry', this.newEntry)
      }
    }
  }

</script>

<style>


</style>