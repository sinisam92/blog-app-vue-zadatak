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
    if (this.$route.params.id) {
      Posts.get(this.$route.params.id)
        .then(response => {
          this.post = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  data() {
    return {
      newComment: {}
    };
  },
  methods: {
    addComment() {
      this.$emit("addNewComment", this.newComment);
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  border-radius: 10px;
  opacity: 0.5;
}
.btn {
  opacity: 0.5;
}
</style>
