<template>
  <div>

  </div>
</template>

<script>
  export default {
    name: 'singleElimination',
    computed: {
      schedule() {
        return this.$store.state.schedule
      }
    },
    data() {
      return {

      }
    },
    methods: {
      findEntry(match, entry) {
        var valid = false
        match.forEach(element => {
          if (element._id == entry._id) {
            valid = true
            return
          }
        })
        return valid
      },


    },

  }

</script>

<style>
</style>