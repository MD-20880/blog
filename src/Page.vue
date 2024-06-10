<script setup>
import PostHeader from './components/PostHeader.vue'
import PostContent from './components/PostContent.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
    <div class="page-wrapper-inner">
        <div class="page-content">
            <PostHeader />
            <PostContent />
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