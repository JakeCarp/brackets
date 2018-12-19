<template>
  <div class="join home">
    <form>
      <h1>Enter Your Bracket Code Below</h1>
      <input type="text" placeholder="Bracket Code">
      <button @submit="joinTournament(entryCode)">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'join',
    data() {
      return {

      }
    },
    computed: {},
    methods: {
      joinTournament(entryCode) {
        this.$store.dispatch(joinTournament)
      }
    },
    components: {},
    props: [],
  }

</script>

<style>


</style>