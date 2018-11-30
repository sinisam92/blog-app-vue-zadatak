import axios from 'axios';

class Posts {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }
    getAll() {
        return axios.get('posts');
    }
    get(id) {
        return axios.get(`posts/${id}`);
    }
    add(newPost) {
        return axios.post('posts', newPost);
    }

}

const posts = new Posts();
export default posts;