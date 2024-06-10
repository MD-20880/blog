<script setup>
import { ref,watchEffect,defineProps } from 'vue'

const props = defineProps(['content'])
let sidebarContent = ref('')

import parseHeaders from './utils/headersParser.js'

watchEffect(() => {
    console.log("props.content Changed")
    sidebarContent.value = parseHeaders(props.content)
})

</script>

<template>
    <div class="sidebar">
        <span v-html="sidebarContent"></span>
    </div>
</template>

<style scoped>
</style>