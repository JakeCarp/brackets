<template>
  <div>
    <navbar />
    <div class="profile container-fluid">
      <profileComponent></profileComponent>
<<<<<<< HEAD
=======
      <form>
        <input type="text-field" name="userBio">
        <button type="submit">Add Bio</button>
      </form>
>>>>>>> d2dc9be9cf499df52c969a6e0b713ed3635f1c4f
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