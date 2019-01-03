<template>
  <div>
    <h1>Don't want to have everyone sign up? Use Guest Entries!</h1>
    <div class="form-group">
      <form @submit.prevent="newOwnerEntry(this.newOwnerEntry)">
        <input type="text" name="entryName" placeholder="Entry Name" v-model="this.newOwnerEntry.entryName">
        <button type="submit">Create Guest Entry</button>
      </form>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ownerEntries",
    data() {
      return {
        newOwnerEntry: {
          entryName: "",
          tournamentId: this.$route.params.tournamentId,
          members: []
        }
      }
    },
    methods: {
      newOwnerEntry(entry) {
        this.$store.dispatch("addNewOwnerEntry", entry)
      }
    }
  }
</script>