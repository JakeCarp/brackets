<template>
  <div class="profileComponent">
    <div class="row">
      <div class="col-12">Welcome {{getUser.name}}</div>
      <div class="col-3">
        <div class="row">
          <div class="col-12"> <img :src="getUser.picture" alt=""></div>
          <div class="col-12">
            <form>
              <button type="button" class="btn btn-outline-primary mt-1" @click="changePicture">Change
                Picture</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-9">
        <ul>
          <li v-for="tournament in getTournaments">{{tournament}}</li>
        </ul>
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
    computed: {
      getUser() {
        return this.$store.state.user
      },
      getTournaments() {
        console.log(this.$store.state.tournaments)
        return this.$store.state.tournaments
      }
    },
    methods: {
      changePicture() {
        let prompt = prompt("Please enter your image URL")
        this.$store.dispatch("changePicture")
      }
    },
    components: {},
    props: [],
    mounted() {
      this.$store.dispatch("getTournaments2", this.getUser._id)
    }
  }

</script>

<style>


</style>