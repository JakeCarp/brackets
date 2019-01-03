<template>
  <div>
    <navbar />
    <div class="profile container-fluid">
      <profileComponent></profileComponent>
      <form>
        <input type="text-field" name="userBio" v-model="this.user.bio">
        <button type="submit">Add Bio</button>
      </form>
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
    computed: {
      user() {
        return this.$store.user
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