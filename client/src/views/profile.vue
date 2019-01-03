<template>
  <div>
    <navbar />
    <div class="profile container-fluid">
      <profileComponent></profileComponent>
    </div>
  </div>
</template>

<script>
  import navbar from "@/components/navbar"
  import profileComponent from "@/components/profileComponent"
  export default {
    name: 'profile',
    data() {
      return {

      }
    },
    watch: {
      user: function (val) {
        this.$store.dispatch("getTournaments2", val._id)
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {},
    components: {
      profileComponent,
      navbar
    },
    props: [],
  }

</script>

<style>


</style>