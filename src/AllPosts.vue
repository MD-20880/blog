<template>
    <div v-if="totalPosts != 0" class="all-posts-inner-wrapper">
        <span v-if="totalPosts != 0"  v-for="i in postsPerPage" :key="i">
            <PostPreview v-if="posts[(currentPage-1)*postsPerPage+i]" 
            :id="posts[(currentPage-1)*postsPerPage+i].id"
            :title="posts[(currentPage-1)*postsPerPage+i].title" 
            :description="posts[(currentPage-1)*postsPerPage+i].content" 
            :date="posts[(currentPage-1)*postsPerPage+i].date" 
            :tags="posts[(currentPage-1)*postsPerPage+i].tags" />
        </span>
           
        <div class="pagination">
            <button v-if="currentPage > 1" @click="currentPage--">Previous</button>
            <span v-for=" i in totalPages" :key="i">
                <button v-if="i == currentPage" @click="currentPage=i" :class="{active: i == currentPage}">{{ i }}</button>
                <button v-else @click="currentPage=i">{{ i }}</button>
            </span> <!-- Display page numbers -->
            <button v-if="currentPage < totalPages" @click="currentPage++">Next</button>
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue'
import PostPreview from './components/PostPreview.vue'
import PostsManager from './components/utils/PostsManager';
// const props = defineProps(['posts'])
// console.log(props.posts.value)

// const posts = props.posts.value

/**
 * @type {Array}
 */
const posts = ref([])

PostsManager.getPosts().then((data)=>{
    posts.value = data
    totalPosts.value = data.length
    totalPages.value = Math.ceil(totalPosts.value/postsPerPage)
})

console.log(posts);
const currentPage = ref(1)
const postsPerPage = 5
const totalPosts = ref(0);
const totalPages = ref(1)

</script>