import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import AppPosts from "./components/AppPosts.vue";
import SinglePost from "./components/SinglePost.vue";



Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/posts' },
  { path: '/posts', component: AppPosts, name: 'posts'},
  { path: '/posts/:id', component: SinglePost, name: 'single-post'}

];
const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
