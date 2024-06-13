<template>
    <div class="all-posts-inner-wrapper">
        <span v-if="totalPosts != 0"  v-for="i in postsPerPage" :key="i">
            <PostPreview v-if="posts.posts[(currentPage-1)*postsPerPage+i]" 
            :title="posts.posts[(currentPage-1)*postsPerPage+i].title" 
            :description="posts.posts[(currentPage-1)*postsPerPage+i].description" 
            :date="posts.posts[(currentPage-1)*postsPerPage+i].date" 
            :tags="posts.posts[(currentPage-1)*postsPerPage+i].tags" />
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
import { onMounted, ref , computed} from 'vue'
import PostPreview from './components/PostPreview.vue'

const posts = ref({})
const currentPage = ref(1)
const postsPerPage = 5
const totalPosts = ref(0)
const totalPages = ref(0)


onMounted(() => {
    fetch(`${window.location.origin}/posts.json`)
        .then(response => response.json())
        .then(data => {
            posts.value=data
            totalPages.value = Math.ceil(posts.value.posts.length/postsPerPage)
            totalPosts.value = posts.value.posts.length
            console.log(posts.value)    
        })
})




//Load all posts

//Generate post tag for first n posts

//Display all posts
</script>