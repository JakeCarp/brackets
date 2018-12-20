<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="entry in schedule.entries" class="card">

        <div class="card-body">
          <div class="card-title w-18rem">
            <h2>{{entry.name}}</h2>
          </div>
          <div class="card-subtitle">
            <div class="row">
              <div class="col-12">
                <h6>W-</h6>
                <h6>D-</h6>
                <h6>L</h6>
              </div>
              <div class="col-12">
                <h6>{{entry.wins}}-</h6>
                <h6>{{entry.draws}}-</h6>
                <h6>{{entry.losses}}</h6>
              </div>
            </div>
          </div>
          <div v-for="round in schedule.rounds">
            <div v-for="match in round">
              <div v-if="findEntry(match, entry)">
                <h3>{{match[0].name}} vs {{match[1].name}}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>


  </div>

  </div>

</template>
<script>
  export default {
    name: 'roundRobin',
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
<style scoped>
  .card {
    width: 18rem;
    flex-direction: column;
  }

  h6 {
    display: inline;
  }
</style>