import './assets/main.css'

import { createApp, ref } from 'vue'
import Blog from './Blog.vue'
import Page from './Page.vue'
import AllPosts from './AllPosts.vue';

const posts = {}

const request = fetch(`${window.location.origin}/posts.json`);
const response = await request
const data = await response.json()
posts.value=data
console.log(posts.value.posts.value)    

import { createWebHistory, createRouter } from 'vue-router'
const routes = [
  { path: '/', component: AllPosts, props: {posts:posts}},
  { path: '/post', component: Page},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(Blog)
    .use(router)
    .mount('#blog')
