<template>
    <div v-if="totalPosts != 0" class="all-posts-inner-wrapper">
        <span v-if="totalPosts != 0"  v-for="i in postsPerPage" :key="i">
            <PostPreview v-if="posts[(currentPage-1)*postsPerPage+i]" 
            :title="posts[(currentPage-1)*postsPerPage+i].title" 
            :description="posts[(currentPage-1)*postsPerPage+i].description" 
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
import { onMounted, ref , defineProps} from 'vue'
import PostPreview from './components/PostPreview.vue'
const props = defineProps(['posts'])
console.log(props.posts.value.posts)

const posts = props.posts.value.posts
const currentPage = ref(1)
const postsPerPage = 5
const totalPosts = posts != undefined ? posts.length : 0
const totalPages = Math.ceil(totalPosts/postsPerPage)

</script>