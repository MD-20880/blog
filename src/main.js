import './assets/main.css'

import { createApp, ref } from 'vue'
import Blog from './Blog.vue'
import Page from './Page.vue'
import AllPosts from './AllPosts.vue';

import PostsManager from './components/utils/PostsManager'

const posts = ref(await PostsManager.getPosts())
console.log(posts.value)

import { createWebHistory, createRouter } from 'vue-router'
const routes = [
  { path: '/', component: AllPosts},
  { path: '/post/:id', component: Page, props:true},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(Blog)
    .use(router)
    .mount('#blog')
