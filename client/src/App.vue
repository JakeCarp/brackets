<template>
  <div id="app" class="font">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="home">Brackets</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 menu">
          <router-link class="home" to="/">Home</router-link>
          <router-link class="home" to="/login">Login</router-link>
          <router-link class="home" to="/about">About</router-link>
          <router-link class="home" to="/create">Create</router-link>
          <router-link class="home" to="/join">Join</router-link>
          <router-link class="home" to="/active">Active</router-link>
          <router-link class="home" to="/test">Test Bracket</router-link>
          <li class="nav-item">
            <a class="nav-link" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  .home {
    color: rgba(0, 0, 0, 0.5);
  }

  .navbar {
    margin-bottom: 2rem;
  }

  .font {
    font-family: 'Permanent Marker', cursive;
  }
</style>