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
    computed: {},
    methods: {},
    components: {
      profileComponent
    },
    props: [],
  }

</script>

<style>


</style>