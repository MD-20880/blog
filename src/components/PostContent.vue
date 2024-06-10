<script setup>
import { ref,watchEffect,defineProps } from 'vue'
import MarkdownIt from 'markdown-it';

const md = MarkdownIt()
const props = defineProps(['content'])
const content = ref('')
watchEffect(() => {
    content.value = md.render(props.content)
})


</script>

<template>
    <div class="content">
         <span v-html="content"></span>
    </div>
    <div class="footer">
        <p>
            Suppose this is a paragraph footer
        </p>
    </div>
</template>