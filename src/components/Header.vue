<template>
  <header class="header">
     <div class="icon">
        <p><i class="bi bi-vimeo ms-2"></i>مستر بلیط</p>
     </div>
        <ul class="links">
            <router-link :to="{name:'plane'}"><li class="link"><i class="bi bi-airplane ms-2"></i>هواپیما</li></router-link>
            <router-link :to="{name:'train'}"><li class="link"><i class="bi bi-train-front ms-2"></i>قطار</li></router-link>
            <router-link :to="{name:'bus'}"><li class="link"><i class="bi bi-bus-front ms-2"></i>اتوبوس</li></router-link>
            <router-link :to="{name:'hotel'}"><li class="link"><i class="bi bi-buildings ms-2"></i>هتل</li></router-link>
        </ul>
     
               
                  
                  <ul ul class="login">
                     <div v-if="INFO.log" class="info">
                        <li class="log"><i class="bi bi-person-plus ms-2"></i>{{ INFO.log.email }}</li>
                        <li class="log"><a href="" @click.prevent="logout()">خروج</a></li>

                     </div>
                     <div v-else class="LOG">
                        <li class="log"><i class="bi bi-person-plus ms-2"></i><router-link :to="{name:'register'}">ثبت نام</router-link></li>
                        <li class="log"><i class="bi bi-person ms-2"></i><router-link :to="{name:'login'}" >ورود</router-Link></li>
                     </div>
                
                 </ul>
            
      
     


  </header>
</template>

<script setup>
 import {useInfoStore} from '../stores/information';
import router from '@/router';
import Swal from 'sweetalert2'


 const INFO=useInfoStore()

 function logout(){

   INFO.delete()
   router.push('/');
   out()
 }
 function out(){
   Swal.fire({
            text: "شما از اکانت خود خارج شدید",
            icon: "success",
            background:'orange',
            iconColor:'white',
            color:'white',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top-right',
        });
 }
</script>

<style scoped>
 .header{
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    border-radius:0% 0% 10% 10%;
    background-color: white;
   position: fixed;
   top:0;
   left: 0;
   width: 100%;
   z-index: 1;
 }
 
 .links{
    display: flex;
    margin-right: 3rem;
 }
  ul a li{
   text-decoration: none;
 }
 .link{
  margin-left: 3rem;
 }
 .links li{
    color: #617d98;
 }
 .links a{
   text-decoration: none;
   font-weight: bold;
   margin-right: 1.5rem;
 }
 .login{
    display: flex;
 }
 .log{
    margin-left: 2rem;
 }
 .icon .bi{
   color: #ffc107;
   font-size:3rem
 }
 .icon p{
    font-weight: bold;
    color: black;
    font-size: 1.5rem;
 }
 .login li a{
    text-decoration: none;
    color:#617d98;
    font-weight: bold;
 }
 .links a li:hover{
   color:#ffc107;
   transition: .7s;
 }
 .login li a:hover{
   color: #ffc107;
   transition: .7s;
 }
 .info{
   display: flex;
   justify-content: center;
 }
 .LOG{
   display: flex;
 }
</style>