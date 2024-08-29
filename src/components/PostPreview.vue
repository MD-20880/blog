<template>
    <div class="post-preview">
        <div class="post-preview-inner-wrapper">
            <div class="post-preview-content">
                
                <RouterLink :to="postLink"><h2 class="post-preview-title">{{ title }}</h2></RouterLink>
                
                <p class="post-preview-description">{{ previewContent }}</p>
                <div class="post-preview-tags">
                    <span v-html="tags"></span>
                </div>
                <p class="post-preview-date">{{ date }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps(['title','description','date','tags','id'])
console.log(props)
const postLink = computed(() => {
    return '/post/'+props.id
})

const previewContent = computed(() => {
    return props.description.slice(0,100)+'...'
})

</script>