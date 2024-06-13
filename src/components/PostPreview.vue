<template>
    <div class="post-preview">
        <div class="post-preview-inner-wrapper">
            <div class="post-preview-content">
                <h2 class="post-preview-title">{{ title }}</h2>
                <p class="post-preview-description">{{ description }}</p>
                <div class="post-preview-tags">
                    <span v-html="tags"></span>
                </div>
                <p class="post-preview-date">{{ date }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps(['title','description','date','tags'])

</script>