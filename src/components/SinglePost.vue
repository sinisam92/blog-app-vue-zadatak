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
          <hr>
          <h3>Comments</h3>
          <ul>
            <li v-for="comment in comments" :key="comment.id">
              <hr>
              {{ comment.text }}
            </li>
          </ul>
          <add-comment></add-comment>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Posts from "../services/Posts";
import AddComment from "./AddComment.vue";

export default {
  components: {
    AddComment
  },
  data() {
    return {
      post: [],
      comments: []
    };
  },
  created() {
    Posts.get(this.$route.params.id)
      .then(response => {
        this.post = response.data;
        this.comments = response.data.comments;
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
li {
  text-align: left;
}
</style>
