<template>
  <div class="testing123">
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler navbar-brand" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand">[Brackets]</h1>
    </nav>
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <ul class="navbar-nav mt-2 mt-lg-0 menu">
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/home">Home</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/profile">Profile</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/about">About</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/create">Create</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" :to="{name: 'join'}">Join</router-link>
            <!-- <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/active">Active</router-link> -->
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/test">Test
              Bracket</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/bracket">
              Bracket</router-link>
            <router-link @click.native='logout()' class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent"
              to="/login">Logout</router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'navbar',
    data() {
      return {

      }
    },
    computed: {},
    methods: {
      logout() {
        // debugger
        this.$store.dispatch('logout')
      }
    },
    components: {},
    props: [],
  }
</script>