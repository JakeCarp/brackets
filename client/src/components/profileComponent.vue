<template>
  <div class="profileComponent">
    <div class="row">
      <div class="col-12">Welcome {{getUser.name}}</div>
      <div class="col-3">
        <div class="row">
          <div class="col-12"> <img :src="getUser.picture" alt="" class="profilePic"></div>
          <div class="col-6 picBtn">
            <!-- modal start -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#changePic">
              Change Picture </button>
            <div class="modal" id="changePic" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Enter Image URL</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <input type="text-field" style="width:350px">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- modal end -->
          </div>
          <div class="col-6 bioBtn">
            <!-- modal start -->
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#changeBio">
              Edit Bio </button>
            <div class="modal" id="changeBio" tabindex="-1" role="dialog">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Edit Bio</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <input type="text-box" style="width:350px">
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- modal end -->
          <!-- <form>
              <button type="button" class="btn btn-outline-primary mt-1" @click="changePicture">Change
                Picture</button>
            </form> -->
          <!-- <div class="col-12">
            <form v-if="!getUser.bio">
              <input type="text-field">
              <button type="submit">Add Bio</button>
            </form>
            <form v-if="getUser.bio">
              <input type="text-field">
              <button type="submit">Change Bio</button>
            </form>
            {{getUser.bio}}
          </div> -->
        </div>
      </div>
      <div class="col-9">
        <table v-if="getOwnedTournaments.length" class="table table-hover">
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
            <tr v-for="tournament in getOwnedTournaments" class="table-success rows">
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
        <!-- seperatioin -->
        <table v-if="getTournaments.length" class="table table-hover">
          <thead>
            <tr>
              <th>Tournaments Participating in</th>
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
            <tr v-for="tournament in getTournaments" class="table-success rows">
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
    </div>
  </div>
</template>

<script>
  export default {
    name: 'profileComponent',
    data() {
      return {

      }
    },
    // watch: {
    //   getUser: function (user) {
    //     this.$store.dispatch("getOwnedTournaments", user._id)
    //     this.$store.dispatch("getTournaments2", user._id)
    //     // debugger
    //   }
    // },
    computed: {
      getUser() {
        return this.$store.state.user
      },
      getTournaments() {
        // debugger
        // console.log(this.$store.state.tournaments)
        return this.$store.state.tournaments
      },
      getArchive() {
        console.log(this.$store.state.archived)
        return this.$store.state.archived
      },

      getOwnedTournaments() {
        // debugger
        return this.$store.state.ownedTournaments
      }
    },
    methods: {
      changePicture() {
        let prompt = prompt("Please enter your image URL")
        this.$store.dispatch("changePicture")
      },
      archive(tournament) {
        this.$store.dispatch("archiveTournament")
      }
    },
    components: {},
    props: [],
    // mounted() {
    //   if (this.getUser._id) {
    //     this.$store.dispatch("getOwnedTournaments", this.getUser._id)
    //     this.$store.dispatch("getTournaments2", this.getUser._id)
    //   }
    // }
  }

</script>

<style>
  .table {
    background-color: gray;
    /* display: flex; */
    /* justify-content: space-between; */
  }

  .sizing {
    font-size: .9rem;
  }

  .rows {
    color: #0c5e4e;
    /* display: flex; */
    /* justify-content: space-between; */
    align-items: center;
  }

  .picBtn {
    display: flex;
    justify-content: flex-end;
  }

  .bioBtn {
    display: flex;
    justify-content: flex-start;
  }

  .profilePic {
    max-width: 200px;
  }
</style>