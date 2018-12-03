<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Title</label>
        <input
          type="text"
          class="form-control"
          placeholder="Title"
          v-model="newPost.title"
          required
          minlength="2"
        >
      </div>
      <div class="form-group">
        <label>Content</label>
        <textarea
          type="textarea"
          rows="3"
          class="form-control"
          placeholder="Content"
          v-model="newPost.text"
          required
          maxlength="300"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button class="btn btn-info" @click.stop.prevent="resetForm">Reset</button>
    </form>
  </div>
</template>

<script>
import Posts from "../services/Posts";
import { redirectMixin } from "../utils/mixins";

export default {
  mixins: [redirectMixin],
  created() {
    if (this.$route.params.id) {
      Posts.get(this.$route.params.id)
        .then(response => {
          this.post = response.data;
          this.newPost = response.data;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  data() {
    return {
      newPost: {}
    };
  },
  methods: {
    onSubmit() {
      if (this.$route.params.id) {
        this.editPost();
      } else {
        this.addPost();
      }
    },
    addPost() {
      Posts.add(this.newPost)
        .then(response => {
          this.newPost = {};
          this.redirectTo("posts");
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    editPost() {
      Posts.edit(this.post.id, this.newPost)
        .then(response => {
          this.redirectTo("posts");
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    resetForm() {
      this.newPost = {};
    }
  }
};
</script>

<style scoped>
.btn {
  margin-left: 4px;
}
</style>
