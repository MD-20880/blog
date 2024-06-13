<template>
    <div class="all-posts-inner-wrapper">
        <PostPreview v-if="postVisibleStatus[0]" title="title1" description="description1" tags="tags1" :id="0"/>
        <PostPreview v-if="postVisibleStatus[1]" title="title2" description="description2" tags="tags2" :id="1"/>
        <PostPreview v-if="postVisibleStatus[2]" title="title3" description="description3" tags="tags3" :id="2"/>
        <PostPreview v-if="postVisibleStatus[3]" title="title4" description="description4" tags="tags4" :id="3"/>
        <PostPreview v-if="postVisibleStatus[4]" title="title5" description="description5" tags="tags5" :id="4"/>
        <PostPreview v-if="postVisibleStatus[5]" title="title6" description="description6" tags="tags6" :id="5"/>
        <PostPreview v-if="postVisibleStatus[6]" title="title7" description="description7" tags="tags7" :id="6"/>
        <PostPreview v-if="postVisibleStatus[7]" title="title8" description="description8" tags="tags8" :id="7"/>
        <div class="pagination">
            <span v-for="i in totalPage">
                <span v-if="i == currentPage" class="page-number active">{{ i }}</span>
                <span v-else @click="setCurrentPage(i)" class="page-number">{{ i }}</span>
            </span>
        </div>
    </div>
</template>


<script setup>
import {ref} from 'vue'
import PostPreview from './components/PostPreview.vue'

const totalPosts = 8
const totalPage = 2
const postPerPage = 5
const postVisibleStatus = ref([])
const curentStart = ref(0)
const currentPage = ref(0)
let list = Array.from({length: postPerPage}, (_, i) => true)
postVisibleStatus.value = list
console.log(postVisibleStatus.value)

const setCurrentPage = (page) => {
    currentPage.value = page
    curentStart.value = (page-1)*postPerPage
    for (let i = 0; i < totalPosts; i++){
        postVisibleStatus.value[i] = false
    }
    for (let i = curentStart.value; i < curentStart.value+postPerPage; i++){
        postVisibleStatus.value[i] = true
    }
    console.log(page)
    console.log(postVisibleStatus.value)
}


//Load all posts

//Generate post tag for first n posts

//Display all posts
</script>