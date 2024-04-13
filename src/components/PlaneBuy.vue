<template>
  <section class="section">
    <div class="title-planebuy mt-5">
      <h4>خرید بلیط هواپیما</h4>
    </div>
  <div class="centers1">
    <div class="ticket">
      <div class="card  mb-3">
  <div class="card-body">
    <p class="card-title mb-3">{{ route.params.day }}</p>
    <div class="text5">
    <h5 class="card-text"><i class="bi bi-airplane fs-2 ms-5"></i>{{ route.params.city1 }}<i class="bi bi-arrow-left ms-5 me-5"></i>{{ route.params.city2 }}</h5>
    <h5 class="price">{{ route.params.price }}</h5>
    </div>
  </div>
</div>
<div class="information">
  <div class="title-info1"><h5>اطلاعات بلیط</h5></div>
  <ul class="links-info1">
    <li class="link-info1">
      <p style="font-weight: bold;"><i class="bi bi-house-door ms-2" style="color:#ffc107"></i>مبدا : {{ route.params.city1 }}</p>
    </li>
    <li>
      <p style="font-weight: bold;"><i class="bi bi-airplane ms-2" style="color:#ffc107"></i>مقصد : {{ route.params.city2 }}</p>
    </li>
    <li>
      <p style="font-weight: bold;"><i class="bi bi-clipboard-check ms-2" style="color:#ffc107"></i>نوع پرواز : ویژه</p>
    </li>
    <li>
      <p style="font-weight: bold;"><i class="bi bi-calendar-day ms-2" style="color:#ffc107"></i>تاریخ پرواز : {{ route.params.day}}</p>
    </li>
    <li>
      <p style="font-weight: bold;"><i class="bi bi-alarm ms-2" style="color:#ffc107"></i>ساعت پرواز : 17 عصر</p>
    </li>
    <li>
      <p style="font-weight: bold;"><i class="bi bi-currency-dollar ms-2" style="color:#ffc107"></i>قیمت بلیط : {{ route.params.price}}</p>
    </li>
  </ul>
</div>

    </div>
   <div class="centers4" >
    <div class="form">
      <tr>
        <div class="icon1">
           <p><i class="bi bi-people-fill me-3 ms-2 mt-5"></i>مشخصات</p>
        </div>
        <div class="centers2">
        <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">نام</label>
         <input type="text" class="form-control " id="exampleFormControlInput1" v-model="form.name">
         <div class="form-text text-danger">{{ form.nameError }}</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">نام خانوادگی</label>
          <input type="text" class="form-control " id="exampleFormControlInput1" v-model="form.lastName">
          <div class="form-text text-danger">{{ form.lastNameError }}</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">کدملی</label>
          <input type="text" class="form-control " id="exampleFormControlInput1" v-model="form.code">
          <div class="form-text text-danger">{{ form.codeError }}</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">تاریخ تولد</label>
          <input type="date" class="form-control" id="exampleFormControlInput1" v-model="form.brth">
          <div class="form-text text-danger">{{ form.brthError }}</div>
        </div>
        </div>
      </tr>
    <div class="add">
      <p @click="add()" class="me-5"><i class="bi bi-person-fill-add"></i>افزودن مسافر</p>
    </div>
    </div>
    <button class="btn btn-warning mt-5" @click="valid()">پرداخت</button>
   </div>
  </div>
  </section>
  
</template>

<script setup>
import Swal from 'sweetalert2'
import { reactive } from 'vue'
import { useRoute } from 'vue-router';
 const route=useRoute();
 const form=reactive({
            name:"",
            nameError:"",
            lastName:"",
            lastNameError:"",
            code:"",
            codeError:"",
            brth:"",
            brthError:"",

        })

 function add(){
  const list=document.querySelector('.form');
  const tr=document.createElement('tr');
  tr.innerHTML=`
  <div class="mb-3">
         <label for="exampleFormControlInput1" class="form-label">نام</label>
         <input type="text" class="form-control" id="exampleFormControlInput1" v-model="form.name">
         <div class="form-text text-danger">${form.nameError}</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">نام خانوادگی</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" v-model="form.lastName">
          <div class="form-text text-danger">${form.lastNameError}</div>

        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">کدملی</label>
          <input type="text" class="form-control" id="exampleFormControlInput1"v-model="form.code" >
          <div class="form-text text-danger">${form.codeError}</div>

        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">تاریخ تولد</label>
          <input type="date" class="form-control" id="exampleFormControlInput1" v-model="form.brth">
          <div class="form-text text-danger">${form.brthError}</div>
        </div>

    
  `
  tr.classList.add('centers3')
  list.appendChild(tr)
 }
function valid(){
           if(form.name==""){
                form.nameError="این فیلد ارزامی است"
            }
            else{
                form.nameError=""
            }

            if(form.lastName==""){
                form.lastNameError="این فیلد الزامی است"
            }
            else{
                form.lastNameError=""
            }
            if(form.code==""){
                form.codeError="این فیلد الزامی است"
            }
            else{
                form.codeError=""
            }
            if(form.brth==""){
                form.brthError="این فیلد الزامی است"
            }
            else{
                form.brthError=""
            }

            if(form.name!=="" && form.lastName!=="" && form.code!=="" && form.brth!==""){
                 success()
                form.name==""
                form.lastName=""
                form.code=""
                form.brth=""

            }
  
}
function success(){
  Swal.fire({
                      title: 'بلیط خریداری شد',
                      text: 'از خرید شما سپاسگزاریم',
                      icon: 'success',
                      });
}
  
 
</script>

<style>
.section{
  background-color: #f0f3f7;
}
.centers1{
  padding: 5rem;
  display: flex;
  justify-content: center;
  justify-content: space-around;
}
.form{
  border-radius: 8px;
  background: white;
  border: 2px solid #ffc107;

}
.centers2{
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: 3rem;
  padding: 5rem;

}
.centers3{
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: 3rem;
  padding: 5rem;
  border-top: 1px solid #ffc107;
}

 
 .text5{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2rem;
}
.price{
  margin-right: 10rem;
}
 .add p{
  cursor: pointer;
 }
 .information{
  border: 1px solid #90959c;
  border-radius: 5px;
  background-color: white;
 }
.title-info1{
  padding: 2rem 2rem 0 2rem;
  text-align: center;
  border-bottom:1px solid #90959c;
  background: #ffc107;
  color:white
} 
.links-info1{
  padding-right: 3rem ;
}

 .ticket .btn{
  width: 20rem;
  margin-right: 6rem;
 }
  .links-info1 li p{
  text-align: center;
  margin-bottom: 2rem;
 }
 .links-info1{
  padding: 2rem 0 0rem 0rem;
 }
 .centers4 .btn{
  width: 15rem;
  color: black;
  margin-right: 12rem;
 }
 .price{
  color:green
}
.card-title{
  color: #0077db !important;
}
.title-planebuy{
  padding-top:5rem;
   text-align: center;
   border-bottom: 2px solid black ;
   margin-left: 15rem;
   margin-right: 15rem;
}
</style>
