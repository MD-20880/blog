import './assets/main.css'

import { createApp } from 'vue'
import Blog from './Blog.vue'
import Page from './Page.vue'
import AllPosts from './AllPosts.vue';

import { createWebHistory, createRouter } from 'vue-router'
const routes = [
  { path: '/', component: AllPosts },
  { path: '/post', component: Page },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(Blog)
    .use(router)
    .mount('#blog')
