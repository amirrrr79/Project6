<template>
    <div class="section">
        <div class="row justify-content-center margin">
            <div class="col-md-4">
                <form @submit.prevent="submit(FormData)" class=" form">
                    <div v-if="Error.length > 0"  class="mb-5" role="alert">
                    <ul class="mb-0">
                        <li style="color: red;" v-for="(Errors, index) in Error" :key="index">{{ Errors }}</li>
                    </ul>
                   </div>
                   
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">ایمیل</label>
                        <input type="text" class="form-control" id="email" v-model="FormData.email"/>

                    </div>
                    <div class="mb-3">
                        <label htmlFor="password" class="form-label">رمز عبور</label>
                        <input type="password" class="form-control" id="password" v-model="FormData.password"/>

                    </div>
                    
                    <button class="btn btn-warning" type="submit">
                        ورود
                        <div v-if="loding" class="spinner-border spinner-border-sm ms-2"></div>
                    </button>
                </form>
            </div>
        </div>
    
    </div>
</template>
<script setup>
import {useInfoStore} from '../stores/information';
import Swal from 'sweetalert2'
import axios from "axios";
const loding=ref(false);
import {  reactive , ref } from "vue"
import { useRouter } from 'vue-router'
const Error=ref([]);
const INFO=useInfoStore()

const router=useRouter();


  const FormData=reactive({
   
   
   
    email:'',
   
   
    password:'',
   
   
   
  
  })
  
   function submit(FormData){
       
    loding.value=true
    axios
        .post("http://localhost:8000/api/login", {
           
            email:FormData.email,
            password:FormData.password,
          
           headers: {
              'Accept': 'application/json',
           },
        }) 
        .then(function (response) {
          // handle success
          login();
          router.push('/');
          INFO.AddInfo(FormData)
          
        })
        .catch(function (error) {
          // handle error
              Error.value=Object.values(error.response.data).flat();
              
    
            loding.value=false


        });
      


   // axios({
 // method: 'post',
 // url: 'http://localhost:8000/api/register',
 // data: {
 
 //   email:FormData.email,
 //   password:FormData.password,
    
 // },
 // headers: {
 //         'Accept': 'application/json',
  //   },

    

//});

   }

   function login(){
    Swal.fire({
            text: "شما وارد حساب کاربری خود شدید",
            icon: "success",
            background:'green',
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

.section{
    background-image: url('/image/train.webp');
    background-size: cover;
  
    width: 95rem;
    background-repeat: none;
}
.form{
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 2rem;
    background-color: hsl(0, 0%, 100%,.7);
    margin-bottom: 3rem;
    margin-top: 3rem;
}
.margin{
    margin-top: 8rem;
}
.btn{
    padding: .5rem 2rem .5rem 2rem;
    margin-right: 5.8rem;
}
</style>