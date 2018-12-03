<template>
  <div id="app">
    <nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  }
};

particlesJS.load("particles-js", "particles.json", function() {
  console.log("callback - particles.js config loaded");
});
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 100;
  position: relative;
}
canvas {
  width: 100%;
  height: 100%;
}
#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgb(58, 117, 156), rgb(0, 0, 0));
  background-size: cover;
}
body {
  height: 100%;
  padding: 0px;
  margin: 0px;
}
</style>
