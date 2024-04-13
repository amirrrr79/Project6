<template>
  <section class="">
    <div class="title borders mb-5"><h4>هتل های {{ route.params.hotel }}</h4></div>
      <div class="cards mt-5">
        <div class="" v-for="(posts,index) in post" :key="index">
            <div class="card mb-5 mt-5" style="width: 18rem;">
              <img :src="posts.image" width="" height="200px" class="card-img-top" alt="...">
            <div class="card-body">
             <h6 class="card-title">{{ posts.name }}{{ route.params.hotel }}</h6>
              <p class="card-text" style="color:#ffc107"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
            <router-link :to="{name:'hotelBuy', params:{id:posts.id, name:posts.name, image:posts.image} }" class="btn btn-primary">مشاهده</router-link>
           </div>
        </div>
        </div>
      </div>
    </section>
    <Footer/>
</template>

<script setup>
import Footer from './Footer.vue'
import { reactive } from "vue";
import { useRoute } from 'vue-router';
 const route=useRoute();
 const post=reactive([
   {
    id:1,
    name:'هتل قصر',
    image:'/image/h1.webp'
   },
   {
    id:2,
    name:'هتل درویش',
    image:'/image/h2.webp'
   },
   {
    id:3,
    name:'هتل کریم خان',
    image:'/image/h3.webp'
   },
   {
    id:4,
    name:'هتل پارس',
    image:'/image/h4.webp'
   },
   {
    id:5,
    name:'هتل اسپیناس پالاس',
    image:'/image/h5.webp'
   },
   {
    id:6,
    name:'هتل گلدن پالاس',
    image:'/image/h6.webp'
   }
]);
</script>

<style scoped>

.cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: .1rem;
  margin-right: 10rem;
 }
 .card-title{
  color: black!important;
 }
 .title{
  text-align: center;
  color: #617d98;
  margin-top: 10rem;
 }
 .borders{
  border-bottom: 2px solid black;
  margin-left: 25rem;
  margin-right: 25rem;
 }
</style>