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
                        <label htmlFor="name" class="form-label">نام</label>
                        <input type="text" class="form-control input" id="name" v-model="FormData.name"/>
                    </div>
                    <div class="mb-3">
                        <label htmlFor="email" class="form-label">ایمیل</label>
                        <input type="text" class="form-control" id="email" v-model="FormData.email"/>

                    </div>
                    <div class="mb-3">
                        <label htmlFor="password" class="form-label">رمز عبور</label>
                        <input type="password" class="form-control" id="password" v-model="FormData.password"/>

                    </div>
                    <div class="mb-3">
                        <label htmlFor="c_password" class="form-label">تکرار رمز عبور</label>
                        <input type="password" class="form-control" id="c_password" v-model="FormData.c_password"/>

                    </div>
                    <button class="btn btn-warning " type="submit" >
                        ثبت نام
                        <div v-if="loding" class="spinner-border spinner-border-sm ms-2"></div>
                    </button>
                </form>
            </div>
        </div>
    
    </div>
</template>
<script setup>
import Swal from 'sweetalert2'
import axios from "axios";
import { reactive , ref } from "vue"
import { useRouter } from 'vue-router'
const loding=ref(false);
const Error=ref([]);


const router=useRouter();


  const FormData=reactive({
    name:'',
   
   
    email:'',
   
   
    password:'',
   
    c_password:'',
   
  
  })
  
   function submit(FormData){
    loding.value=true

    axios
        .post("http://localhost:8000/api/register", {
            name:FormData.name,
            email:FormData.email,
            password:FormData.password,
           c_password:FormData.c_password,
           headers: {
              'Accept': 'application/json',
           },
        })
        .then(function (response) {
          // handle success
          register();
          router.push('/');
        
        })
        .catch(function (error) {
          // handle error
              Error.value=Object.values(error.response.data).flat();
              
              loding.value=false


        });


   // axios({
 // method: 'post',
  //url: 'http://localhost:8000/api/register',
  //data: {
  //  name:FormData.name,
  //  email:FormData.email,
    //password:FormData.password,
    //c_password:FormData.c_password
  //},
 // headers: {
           //     'Accept': 'application/json',
       //     },

//});

   }

   function register(){
              Swal.fire({
                      text: 'ثبت نام شما انجام شد',
                      icon: 'success',
                      });
  }
  
</script>
<style scoped>

.section{
    background-image: url('/image/plane.webp');
    background-size: cover;
  
    width: 95rem;
    background-repeat: none;
    margin-top: 9rem;
    
}
.form{
    padding-left: 5rem;
    padding-right: 5rem;
    padding-bottom: 2rem;
    background-color: hsl(0, 0%, 100%,.7);
    margin-bottom: 2rem;
    margin-top: 2rem;

}
.margin{
    margin-top: 4rem;
}
.btn{
    padding: .5rem 2rem .5rem 2rem;
    margin-right: 5.5rem;
}
</style>