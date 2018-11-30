<template>
    <div class="container">
        <div class="jumbotron">
            <table border="1">
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Content</th>
                </thead>
                <tbody>
                    <tr v-for="post in posts" :key="post.id">
                        <td>{{ post.id }}</td>
                        <td>{{ post.title }}</td>
                        <td>{{ post.text }}</td>                                        
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
            posts: [],
        }
    },
    created() {
        Posts.getAll()
            .then(response => {
                this.posts = response.data
            }).catch(err => {
                console.log(err.response);
                
            })
    }
}
</script>

<style scoped>
table {
    border: 5px;
}
</style>
