<template>
  <div class="create home">
    <form>
      <div class="form-group row">
        <label for="title" class="col-sm-2 col-form-label">Bracket Title</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="title" placeholder="Bracket Title">
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-sm-2 col-form-label">Bracket Description</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="description" placeholder="Bracket Description">
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Bracket Type</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Single Elimination
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Double Elimination
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
              <label class="form-check-label" for="gridRadios3">
                Round Robin
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Round Robin Split
              </label>
            </div>
            <label for="entries">Number of Bracket Entries</label><input id="entries" type="number" value="5" />
          </div>
        </div>
      </fieldset>
      <div class="form-group row">
        <label for="passcode" class="col-sm-2 col-form-label">Bracket Code</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="passcode" placeholder="Create a unique passcode for your Bracket">
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-10">
          <button @submit="addTourney" type="submit" class="btn btn-primary">Create Bracket</button>
        </div>
      </div>
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