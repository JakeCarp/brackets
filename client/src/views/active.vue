<template>
  <div class="active container-fluid home">
    <activeComponent class="row"></activeComponent>
  </div>
</template>

<script>
  import activeComponent from "@/components/activeComponent"

  export default {
    name: 'active',
    data() {
      return {

      }
    },
    computed: {},
    methods: {},
    components: {
      activeComponent
    },
    props: [],
  }

</script>

<style>
  .card-header {
    width: 100vw;
  }
</style>