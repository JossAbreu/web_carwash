<script setup lang='ts'> 


const props = defineProps({
    icon_name:{type:String, required: true},
    type_icon:{type:String, required: true},
    class_icon: String,
    fill_enable: Boolean,
  
})
 

   
</script>
<template>
    <i :class="[props.type_icon ? 'material-symbols-' + type_icon : 'material-symbols-rounded' , fill_enable? 'fill': '']">
        <span :class="class_icon ? class_icon : 'text-white text-3xl fill-current'">{{ icon_name ? icon_name : 'more_horiz' }}</span>
      </i>
      
</template>
<style scoped>
.fill{
    font-variation-settings:'FILL' 1 !important;
}
</style>