<script setup>
import { useRoute } from 'vue-router'
import Navigation from './Navigation.vue'

</script>

<template>
    <div class="blog-wrapper">
        <div class="blog">
            <div class="nav-wrapper-outer">
                <Navigation />
            </div>
            <div class="page-wrapper-outer">
                <RouterView />
            </div>
        </div>
    </div>
</template>


<style scoped>

.blog{
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.nav-wrapper-outer{
    height: 90px;
    position: fixed;
}

.page-wrapper-outer{
    margin-top: 90px;
    flex:1;
}


</style>