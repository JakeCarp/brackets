<template>
  <div class="join home">
    <form @submit.prevent="getTournamentByEntryCode">
      <h1>Enter Your Bracket Code Below</h1>
      <input type="text" placeholder="Bracket Code" v-model="entryCode">
      <button type="submit">Submit</button>
    </form>
    <form @submit.prevent="createEntry" v-if="$route.params.tournamentId" @submit="">
      <input placeholder="name" type="text" v-model="newEntry.name">
      <button type="submit">submit</button>
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
          name: "",
          tournamentId: this.$route.params.tournamentId,
          members: []
        }

      }
    },
    computed: {},
    methods: {
      getTournamentByEntryCode() {
        this.$store.dispatch('getTournamentByEntryCode', this.entryCode)
      },
      createEntry() {
        this.$store.dispatch('createEntry', this.newEntry)
      }
    },
    components: {},
    props: [],
  }

</script>

<style>


</style>