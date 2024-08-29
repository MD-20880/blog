<script setup>
import { ref,watchEffect,defineProps } from 'vue'
import { useRoute } from 'vue-router';
import PostsManager from './utils/PostsManager';
import parseHeaders from './utils/headersParser.js'

const route = useRoute()
let sidebarContent = ref('')

watchEffect(() => {
    console.log("props.content Changed")
    const content = PostsManager.getPost(route.params.id).content
    sidebarContent.value = parseHeaders(content)
})

</script>

<template>
    <div class="sidebar">
        <span v-html="sidebarContent"></span>
    </div>
</template>

<style scoped>
</style>