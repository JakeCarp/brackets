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
          <li v-for="tournament in getUser.tournament">{{tournament}}</li>
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
  }

</script>

<style>


</style>