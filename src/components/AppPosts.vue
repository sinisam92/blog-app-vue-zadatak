<template>
  <div class="container">
    <div class="jumbotron">
      <table>
        <thead>
          <th>Title</th>
          <th>Content</th>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>
              {{ post.title }}
              <button
                class="btn btn-link"
                @click="navigateToPost(post.id)"
              >View Post</button>
              Comms: {{ post.comments.length }}
            </td>
            <td>{{ post.text }}</td>
            <router-link :to="{ name: 'edit-post', params: { id: post.id }}">
              <button class="btn btn-info">Edit</button>
            </router-link>
            <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Posts from "../services/Posts";

export default {
  data() {
    return {
      posts: []
    };
  },
  created() {
    Posts.getAll()
      .then(response => {
        this.posts = response.data;
      })
      .catch(err => {
        console.log(err.response);
      });
  },
  methods: {
    deletePost(id, index) {
      Posts.delete(id)
        .then(response => {
          this.posts.splice(index, 1);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    navigateToPost(id) {
      this.$router.push(`/posts/${id}`);
    }
  }
};
</script>

<style scoped>
table {
  border: 5px;
  width: 100%;
}
.btn {
  width: 100%;
  margin-bottom: 2px;
}
</style>
