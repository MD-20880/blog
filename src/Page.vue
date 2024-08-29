<script setup>
/* Components */
import PostHeader from './components/PostHeader.vue'
import PostContent from './components/PostContent.vue'
import Sidebar from './components/Sidebar.vue'
/* Vue */
import { ref } from 'vue';
import { useRoute } from 'vue-router';
/* Markdown */
import markdownit from 'markdown-it';
import anchor from 'markdown-it-anchor';
/* Utils */
import PostsManager from './components/utils/PostsManager';

/* Variables */
const currentPost = ref({})
const route = useRoute()
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true
}).use(anchor,{})
var renderedContent = ""

/* Initialization */
currentPost.value = PostsManager.getPost(route.params.id)
renderedContent = md.render(currentPost.value.content,{})

</script>

<template>
    <div class="page-wrapper-inner">
        <div class="page-content">
            <PostHeader />
            <PostContent :content=renderedContent />
        </div>
        <div class="page-sidebar">
            <Sidebar />
        </div>
    </div>
</template>

<style scoped>

.page-wrapper-inner{
    display: flex;
}

.page-content{
    flex:2;
}

.page-sidebar{
    flex:1;
}


</style>