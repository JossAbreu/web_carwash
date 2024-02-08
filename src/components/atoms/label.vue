<script setup lang='ts'>

  
 
 const props = defineProps({
    text: {type:String,required:true},
    class_label: String
 })


 
</script>
<template>
    <p :class="props.class_label? class_label : 'text-base'">{{props.text? text : 'text label'}}</p>
</template>


