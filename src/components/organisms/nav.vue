<script setup lang='ts'>
import Label from '../atoms/label.vue'
import Icon from '../atoms/icon.vue'
</script>
<template>
    <nav class="px-20 py-10 flex items-center justify-between  ">
        <div xyz="fade duration-15 left-100% small-100% ease-in-out-back"  class="flex items-center gap-1 xyz-in">
            <Icon class="-scale-x-100 " :fill_enable="true" icon_name="water_drop" type_icon="rounded" class_icon="text-8xl fill-black "  />
            <Label text="klin carwash" class_label="text-6xl font-sans_custom" />
        </div>
        <div xyz="fade duration-7 top-100% small-100% stagger-6 ease-in-out-back"  class="flex  gap-10 px-20">
            <Label text="home" class_label="text-2xl font-sans_custom cursor-pointer hover:font-semibold xyz-in" />
            <Label text="services" class_label="text-2xl font-sans_custom cursor-pointer hover:font-semibold xyz-in" />
            <Label text="about us " class_label="text-2xl font-sans_custom cursor-pointer hover:font-semibold xyz-in" />
            <Label text="make a reservation" class_label="text-2xl font-sans_custom cursor-pointer hover:font-semibold xyz-in" />
            
        </div>
         
    </nav>

</template>


