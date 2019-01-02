<template>
  <div>
    <navbar />
    <playerPool> </playerPool>
  </div>
</template>

<script>
  import navbar from "@/components/navbar"
  import playerPool from '@/components/playerPool'

  export default {
    name: 'bracket',
    data() {
      return {

      }
    },
    components: {
      playerPool
    },
  }
</script>

<style>
</style>