<template>
  <div>
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
  </div>
</template>

<script>
  export default {
    name: 'playerPool',
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
    }
  }
</script>

<style>
  .teams {
    display: flex;
    justify-content: center;
  }
</style>