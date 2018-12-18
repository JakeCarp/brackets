<template>
  <div class="login container-fluid home">
    <div class="row" style="height: 30vh"></div>
    <div class="row login-info">
      <div class="col-4"></div>
      <div class="col-4">
        <form v-if="loginForm" @submit.prevent="loginUser">
          <input type="email" v-model="creds.email" placeholder="email" style="margin-bottom: 5px"><br>
          <input type="password" v-model="creds.password" placeholder="password" style="margin-bottom: 5px"><br>
          <div class="action" @click="loginForm = !loginForm">
            <p v-if="loginForm" class="login-text">No account? Click here to Register</p>
            <p v-else>Already have an account? Click here to Login</p>
          </div>
          <button type="submit">Login</button>
        </form>
        <form v-else @submit.prevent="register">
          <input type="text" v-model="newUser.name" placeholder="name">
          <input type="email" v-model="newUser.email" placeholder="email">
          <input type="password" v-model="newUser.password" placeholder="password">
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
    <div class="col-4"></div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        loginForm: true,
        creds: {
          email: "",
          password: ""
        },
        newUser: {
          email: "",
          password: "",
          name: ""
        }
      };
    },
    methods: {
      register() {
        this.$store.dispatch("register", this.newUser);
      },
      loginUser() {
        this.$store.dispatch("login", this.creds);
      }
    }
  };
</script>

<style>

</style>