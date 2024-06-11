<script setup>
import { ref,watchEffect,defineProps } from 'vue'
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor'

const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
}).use(anchor)

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