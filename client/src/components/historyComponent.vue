<template>
  <div class="historyComponent">
    <h3>Bracket History</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Managed Brackets</th>
        </tr>
        <tr>
          <th scope="col">Type</th>
          <th scope="col">Title</th>
          <th scope="col">Number of Entrants</th>
          <th scope="col">Tournament Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tournament in archivedTournaments" class="table-success rows">
          <th scope="row">{{tournament.style}}</th>
          <td>{{tournament.title}}</td>
          <td>Column content</td>
          <td>{{tournament.archived ? "Finished" : "Ongoing"}}</td>
          <td>
            <router-link :to="{name: 'bracket', params: {tId: tournament._id}}"><button type="button" class="btn btn-outline-primary">View</button></router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <ul>
          <li v-for="tournament in getTournaments">{{tournament.title}}</li>
        </ul> -->
  </div>
</template>

<script>
  export default {
    name: 'historyComponent',
    data() {
      return {

      }
    },
    computed: {
      archivedTournaments() {
        return this.$store.state.ownedTournaments.filter(t => t.archived)
      }
    },
    methods: {
    }
  }

</script>

<style>


</style>