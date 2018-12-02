<template>
  <div class="container">
    <h3>Add Comments</h3>
    <form @submit.prevent="addComment">
      <textarea name="text" rows="3" required v-model="newComment.text"></textarea>
      <button class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import Posts from "../services/Posts";
export default {
  created() {
    this.$route.params.id &&
      Posts.get(this.$route.params.id)
        .then(response => {
          this.post = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
  },
  data() {
    return {
      newComment: {}
    };
  },
  methods: {
    addComment() {
      Posts.addComment(this.post.id, this.newComment)
        .then(response => {
          this.$router.push(`/posts/${this.post.id}`);
          this.newComment = {};
          console.log(this.post.id);
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  border-radius: 10px;
}
</style>
