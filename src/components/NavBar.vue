<template>
  <div>
    <nav class="navbar navbar-light">
      <a class="navbar-brand">Posts exercise</a>
      <router-link to="/posts" style="color: white; font-size: 30px;">Posts</router-link>
      <router-link to="/add">
        <md-button class="md-fab md-primary">
          <md-icon style="font-size: 40px; color: white;">+</md-icon>
        </md-button>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TabRouter"
};
</script>

<style scoped>
.navbar,
.navbar-brand {
  color: white;
  font-size: 30px;
}
</style>

