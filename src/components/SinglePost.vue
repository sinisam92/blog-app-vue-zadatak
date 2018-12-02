<template>
  <div class="container">
    <div class="comment">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="mt-4">{{ post.title }}</h1>

          <p>{{ post.createdAt | formatDate}}</p>

          <hr>

          <p class="lead">{{ post.text }}</p>
          <hr>
          <h3>Comments</h3>
          <ul>
            <li v-for="comment in comments" :key="comment.id">
              <hr>
              {{ comment.createdAt | diffForHumans }}
              <br>
              {{ comment.text }}
            </li>
          </ul>
          <add-comment @addNewComment="addComment"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Posts from "../services/Posts";
import AddComment from "./AddComment.vue";
import { DateMixin, redirectMixin } from "../utils/mixins.js";

export default {
  mixins: [redirectMixin, DateMixin],

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
  },
  methods: {
    addComment(newComment) {
      Posts.addComment(this.post.id, newComment)
        .then(response => {
          this.comments.push(response.data);
          newComment.text = "";
        })
        .catch(error => {
          console.log(error.response);
        });
    }
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
