<template>
  <section class="section">
    <div class="title-hotel"><h4>رزرو هتل</h4></div>
    <div class="center5">
        <div class="img">
            <div id="carouselExampleIndicators" class="carousel slide" style="width: 550px;">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>

  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="route.params.image" class="d-block w-100" height="330px" alt="...">
    </div>
    <div class="carousel-item">  
      <img :src="img1" class="d-block w-100 " height="330px"  alt="...">
    </div>
    <div class="carousel-item">
      <img :src="img2" class="d-block w-100" height="330px" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="img3" class="d-block w-100" height="330px" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div class="img-info">
    <div class="card  mb-3" style="width: 34.5rem;">
  <div class="card-body">
    <div class="title-icon">
    <h5 class="card-title mb-5 color">{{ route.params.name }}</h5>
    <div class="icon2">
        <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
    </div>
    </div>
    <p class="card-text">{{ route.params.name }} خاطره یک سفر به یادماندنی از  برای شما به جای می‌گذارد.این هتل یک فضای بزرگ و سرسبز با درختان نخل زیبا، فضایی آرام و دلنشین را برای مسافران ایجاد کرده است.می‌توانید از میان 210 اتاق، 30 سوئیت رویال و پرزیدنت در ساختمان اصلی و همچنین 140 سوئیت آپارتمان در محوطه هتل، محل اقامت مورد نظر خود را رزرو کنید.از امکانات هتل می‌توان فروشگاه، انواع رستوران و کافي شاپ در آن اشاره کرد.</p>
     <h6 class="mb-5 mt-5"><i class="bi bi-plus-square-fill ms-2"></i>امکانات رفاهی</h6>
     <ul class="ul">
        <li class="li"><p>پارکینگ</p></li>
        <li class="li"><p>کافی شاپ</p></li>
        <li class="li"><p>مینی بار</p></li>
        <li class="li"><p>لابی</p></li>
     </ul>
     <h6 class="mb-5 mt-5"><i class="bi bi-cup-hot-fill ms-2"></i>غذا و نوشیدنی</h6>
     <ul class="ul">
        <li class="li"><p>رستوران</p></li>
        <li class="li"><p>کافی شاپ</p></li>
     </ul>
     <h6 class="mb-5 mt-5"><i class="bi bi-plus-square-fill ms-2"></i>خدمات تفریحی و رفاهی</h6>
     <ul class="ul">
        <li class="li"><p>استخر</p></li>
        <li class="li"><p>سونا</p></li>
        <li class="li"><p>جکوزی</p></li>
        <li class="li"><p>باشگاه ورزشی</p></li>
     </ul>
     <h6 class="mb-5 mt-5"><i class="bi bi-scooter ms-2"></i>امکانات ورزشی</h6>
     <ul class="ul">
        <li class="li"><p>زمین فوتبال</p></li>
        <li class="li"><p>بیلیارد</p></li>
     </ul>
  </div>
</div>

</div>
        </div>

        <div class="centers4" >
    <div class="form form1">
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
    <button class="btn btn-warning mt-5" @click="valid()">رزرو</button>
   </div>
       
    </div>

    
  </section>
</template>

<script setup>
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router';
import { reactive } from 'vue'
 const route=useRoute();
  const img="/image/h1.webp"
  const img1="/image/i2.webp"
  const img2="/image/i3.webp"
  const img3="/image/i1.jpeg"
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
                      title: 'هتل شما رزرو شد',
                      text: 'اقامت خوشی را برای شما آرزومندیم',
                      icon: 'success',
                      });
}
</script>

<style>

.title-hotel{
  padding-top:5rem;
   text-align: center;
   border-bottom: 2px solid black ;
   margin-left: 15rem;
   margin-right: 15rem;
   margin-top: 5rem;
}

.center5{
  display: grid;
  grid-template-columns:1fr 1fr ;
}
.img{
    margin-right: 5rem;
    margin-top: 5rem;
}
.ul{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-around;
    border-bottom: 1px solid black;
}
.li{
    margin-right: 5rem;
    list-style:square;
}
.form1{
    margin-top: 5rem;
    margin-left: 5rem;
}
.title-icon{
    display: flex;
    justify-content: space-between;
}
.icon2{
    color: #ffc107;
}
.color{
    color: black !important;
}
.centers3{
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-gap: 3rem;
  padding: 5rem;
  border-top: 1px solid #ffc107;
}
</style>