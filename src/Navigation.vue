<script setup>
import { onMounted,ref,watch} from 'vue';

    let scrollY = ref('')
    let transparency = ref(100)
    onMounted(() => {
        window.addEventListener('scroll', () => {
            scrollY.value = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
        })
    })

    watch(scrollY, (newValue,oldValue) => {
        if (newValue > 100) {
          if(newValue-oldValue > 10){
            transparency.value = 0;
            console.log(transparency.value)
          }
          if(newValue-oldValue > 0){
            transparency.value -= 10
            transparency.value = Math.max(0,transparency.value)
            console.log(transparency.value)
          }else{
            transparency.value += 10
            transparency.value = Math.min(100,transparency.value)
            console.log(transparency.value)
          }
        }else{
            transparency.value = 100
        }
    })
</script>

<template>
    <nav>
        <div class="logo-wrapper" v-bind:style="{ opacity:transparency/100 }">
            <RouterLink to="/">
              <img alt="Blog logo" class="logo" src="./assets/logo.svg" width="45" height="45" />
            </RouterLink>
            <p class="navigation-blogicon-text" >Hatsuyuki</p>
        </div>
    </nav>
</template>

<style scoped>

</style>