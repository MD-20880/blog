<script setup>
import { ref } from 'vue';
import MarkdownIt from 'markdown-it';

const md = MarkdownIt()
const result = ref('')

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1:3000/tools/content.md',true);
xhr.onreadystatechange = function(){
    console.log("GET_REQUEST SEND")
    if (xhr.readyState == 4 && xhr.status == 200){
        result.value = md.render(xhr.responseText);
    }
}
xhr.send();

</script>

<template>
    <div class="content">
         <span v-html="result"></span>
    </div>
    <div class="footer">
        <p>
            Suppose this is a paragraph footer
        </p>
    </div>
</template>