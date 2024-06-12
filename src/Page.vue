<script setup>
import PostHeader from './components/PostHeader.vue'
import PostContent from './components/PostContent.vue'
import Sidebar from './components/Sidebar.vue'

import { ref } from 'vue';
import markdownit from 'markdown-it';

// const md = markdownit()
const md = markdownit({
  html: true,
  linkify: true,
  typographer: true
})
const result = ref('')

//load post
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1:3000/playground/content.md',true);
xhr.onreadystatechange = function(){
    console.log("GET_REQUEST SEND")
    if (xhr.readyState == 4 && xhr.status == 200){
        result.value = xhr.responseText;
    }
}
xhr.send();


</script>

<template>
    <div class="page-wrapper-inner">
        <div class="page-content">
            <PostHeader />
            <PostContent :content=result />
        </div>
        <div class="page-sidebar">
            <Sidebar :content=result />
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