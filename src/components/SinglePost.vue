<template>
  <div class="container">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <!-- Title -->
          <h1 class="mt-4">{{ post.title }}</h1>

          <!-- Author -->
          <!-- <p class="lead">
                by
                <a href="#">Start Bootstrap</a>
          </p>-->
          <!-- <hr> -->
          <!-- Date/Time -->
          <p>{{ post.createdAt }}</p>

          <hr>

          <!-- Post Content -->
          <p class="lead">{{ post.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Posts from "../services/Posts";

export default {
  data() {
    return {
      post: []
    };
  },
  created() {
    Posts.get(this.$route.params.id)
      .then(response => {
        this.post = response.data;
      })
      .catch(error => {
        console.log(error.response);
      });
  }
};
</script>

<style scoped>
.container {
  text-align: left;
}
</style>
