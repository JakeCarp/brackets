<template>
  <div class="container-fluid">
    <div class="row">
      <div v-for="entry in scheduleData.entries" class="card">
        <div class="card-body">
          <div class="card-title">
            <h2>{{entry.name}}</h2>
          </div>
        </div>



      </div>


    </div>

  </div>

</template>
<script>
  export default {
    name: 'roundRobin',
    props: ["scheduledata"]
  }

</script>
<style scoped>

</style>