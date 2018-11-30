<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>

import NavBar from "./components/NavBar.vue";
import AppPosts from "./components/AppPosts.vue";

export default {
  name: 'app',
  components: {
    NavBar,
    AppPosts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
