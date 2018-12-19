<template>
  <div id="app" class="font">
    <nav class="navbar navbar-dark bg-dark">
      <button class="navbar-toggler navbar-brand" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand">[Brackets]</h1>
    </nav>
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <ul class="navbar-nav mt-2 mt-lg-0 menu">
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/home">Home</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/about">About</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/create">Create</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/join">Join</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/active">Active</router-link>
            <router-link class="home font" data-toggle="collapse" data-target="#navbarToggleExternalContent" to="/test">Test
              Bracket</router-link>
          </ul>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>


<style>
  #app {
    font-family: 'Anton', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


  #nav {
    padding: 30px;
  }

  .home {
    color: rgba(0, 0, 0, 0.5);
    font-size: 2.5rem;
    font-family: 'Anton', sans-serif;
  }


  .menu {
    display: flex;
    justify-content: space-between;
  }

  .font {
    font-family: 'Anton', sans-serif;
  }
</style>