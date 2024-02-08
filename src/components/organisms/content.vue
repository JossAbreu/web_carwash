<script setup lang='ts'>
import Label from '../atoms/label.vue'
import Img from '../atoms/img.vue'
</script>
<template>
     <section class="grid 0 grid-cols-2 w-full h-full gap-1 px-20 ">
          <section class=" flex flex-col gap-10   justify-center">
             <div class="flex flex-col gap-4 justify-center">
                <div>
                    <div xyz="fade duration-15 left-100% big-100% ease-in-out-back" class="w-max xyz-in relative isolate ">

                        <Label  class="z-40" text="The best" class_label="text-6xl font-sans_custom flex " />

                        <div class="w-full h-[2rem] absolute  bottom-0 -z-10 bg-amber-200 " ></div>
                    </div>
                 
                    <div xyz="fade duration-15 right-100% ease-in-out-back"  class="w-max relative isolate xyz-in ">
                        <Label text="carwash in town!" class_label="text-6xl font-sans_custom" />
                        <div class="w-full h-[2rem] absolute  bottom-0 -z-10 bg-amber-200 " ></div>
                    </div>
                   
                </div>

                <Label xyz="fade-100% duration-15 small-100% ease-in-out-back"   text="CLEAN CAR" class_label="text-8xl font-extralight font-sans_custom tracking-wider text-stone-900 xyz-in " />

                <Label xyz="fade-100% duration-20 short-100% ease-in-out-back"  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tenetur molestias maxime earum impedit veritatis omnis, culpa " class_label="text-xl max-w-[40rem] font-sans_custom xyz-in" />
             </div>
             <div>
                <div xyz="fade-100% duration-15 narrow-100% right-100% ease-in-out-back"  class="w-max relative isolate xyz-in ">
                    <Label text="make reservation today" class_label="text-5xl font-extralight text-stone-800 font-sans_custom capitalize" />
                    <div class="w-full h-[2rem] absolute  bottom-0 -z-10 bg-amber-200 " ></div>
                </div>
                
                <div xyz="fade-100% stagger-7 duration-15 narrow-100% down-100% ease-in-out-back" class="flex gap-4 items-center grayscale ">
                    <!-- //images -->
                   <Img src="/visa.png" alt="img_visa" class_img="w-16 h-16 xyz-in" /> 
                   <Img src="/mastercard.png" alt="img_visa" class_img="w-16 h-16 xyz-in" /> 
                   <Img src="/paypal.png" alt="img_visa" class_img="w-20 h-20  xyz-in" /> 
                </div>
             </div>
          </section>
          <section class=" flex justify-center items-center  ">
         
                <Img xyz="fade-100% right-100% skew-down-5 duration-15 perspective-5 origin-bottom-left" src="/car.png"   alt="img_visa" class_img=" w-[45rem] h-[40rem] object-fill xyz-in " /> 
         
               
          </section>
     </section>
</template>


