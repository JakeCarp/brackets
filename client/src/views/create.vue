<template>
  <div class="create">
    <form @submit="addTourney">
      <input type="text" placeholder="test">
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'create',
    data() {
      return {

      }
    },
    computed: {},
    methods: {
      addTourney() {
        this.$store.dispatch("addTourney")
      }
    },
    components: {},
    props: [],
  }

</script>

<style>


</style>