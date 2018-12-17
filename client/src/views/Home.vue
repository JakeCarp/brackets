<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12" @click="">
        <router-link :to="{name: 'create'}">
          <div class="jumbotron">
            <h1 class="display-3">Create</h1>
            <p class="lead">Click to create a new tournament</p>
          </div>
        </router-link>
      </div>
      <div class="col-12">
        <router-link :to="{name: 'join'}">
          <div class="jumbotron">
            <h1 class="display-3">Join</h1>
            <p class="lead">Click to join a tournament</p>
          </div>
        </router-link>
      </div>
      <div class="col-12">
        <router-link :to="{name: 'active'}">
          <div class="jumbotron">
            <h1 class="display-3">Active</h1>
            <p>Click to view the current tournaments you are particiapting in</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {

      }
    },
    computed: {},
    methods: {},
    components: {},
    props: [],
  }

</script>

<style>
  .jumbotron {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
</style>