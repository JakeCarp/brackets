<template>
  <div class="testBracket">
    <button type="button" class="btn btn-outline-primary" @click="calcPreGames">Primary</button>
  </div>
</template>

<script>
  export default {
    name: 'testBracket',
    data() {
      return {
        sweetSpots: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
      }
    },
    computed: {
      tournament() {
        return this.$store.state.tournament.entries
      }
    },
    methods: {
      calcPreGames() {
        // debugger
        this.$store.dispatch("calcPreGames", { entries: this.tournament, sweetSpots: this.sweetSpots })
      }
    },
    components: {},
    props: [],
    // mounted() {
    //   this.$store.dispatch("getTournaments")
    //   console.log(this.tournament)
    // }
  }

</script>

<style>


</style>