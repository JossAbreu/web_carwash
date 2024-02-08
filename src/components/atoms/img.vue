<script setup lang='ts' >
 const props = defineProps({
  src:{type:String,required: true},
  class_img:String,
  alt:{type:String,required: true},
 })
</script>
<template>
    <img :src="src? src : ''" :alt="alt? alt : ''" :class="class_img? class_img : ''">
</template>


<style scoped>
</style>