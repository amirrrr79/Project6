<template>
    <div class="baner">
      <img :src="img" width="100%" height="300px">
    </div>
    <div class="center">
     <div class="border">
      <div class="border-title mb-5 mt-3">
        <div class="icn center1">
              <router-link :to="{name:'plane'}">
                  <i class="bi bi-airplane fs-2"></i>
                  <p>هواپیما</p>
              </router-link>
  
          </div>
          <div class="icn center2">
              <router-link :to="{name:'bus'}">
                  <i class="bi bi-bus-front fs-2"></i>
                  <p>اتوبوس</p>
              </router-link>
              
          </div>
          <div class="icn center3">
              <router-link :to="{name:'train'}">
                  <i class="bi bi-train-front fs-2"></i>
                  <p>قطار</p>
              </router-link>
              
          </div>
          <div class="icn center4">
              <router-link :to="{name:'hotel'}">
                  <i class="bi bi-buildings fs-2"></i>
                  <p>هتل</p>
              </router-link>
              
          </div>

          
      </div>
  
      <div class="forms mb-4">
          <div class="ms-5 me-5">
           <label for="exampleFormControlInput1" class="form-label">مبدا:</label>
           <input type="text" class="form-control" style="width: 120%;" id="exampleFormControlInput1" placeholder="مبدا(شهر)">
          </div>
  
          <div class="ms-5">
           <label for="exampleFormControlInput1" class="form-label">مقصد:</label>
           <input type="text" class="form-control" style="width: 120%;" id="exampleFormControlInput1" placeholder="مقصد (شهر)">
          </div>
          <div class="ms-5">
           <label for="exampleFormControlInput1" class="form-label">تاریخ رفت :</label>
           <input type="date" class="form-control" style="width: 120%;" id="exampleFormControlInput1">
          </div>
          <div class="ms-5">
           <label for="exampleFormControlInput1" class="form-label">تاریخ برگشت:</label>
           <input type="date" class="form-control" style="width: 120%;" id="exampleFormControlInput1">
          </div>
          <button type="button" class="btn btn-warning ms-5">جستجو</button>
      </div>
     </div>
    </div>

    <section class="top">
    <div class="title mb-5"><h4>بلیط اتوبوس</h4></div>
     <div class="icons">
      <div class="icon1">
        <i class="bi bi-clipboard2-check-fill"></i>
        <h6>موجودی کامل</h6>
        <p>با ارائه حداکثری موجودی، برنامه‌ریزی سفر را برای هر زمان و مقصدی ممکن کرده‌ایم!</p>
      </div>
      <div class="icon2">
        <i class="bi bi-patch-check-fill"></i>
        <h6>تجربه دلچسب خرید</h6>
        <p>دغدغه ما در طراحی، سادگی و خرید آسان است!</p>
      </div>
      <div class="icon3">
        <i class="bi bi-currency-exchange"></i>
        <h6>مشاور در مدیریت هزینه</h6>
        <p>با ارائه قابلیت‌های هوشمند کمک می‌کنیم تا سفری به‌صرفه داشته باشید!</p>
      </div>
      <div class="icon4">
        <i class="bi bi-headset"></i>
        <h6>پشتیبان سفر</h6>
        <p>از لحظه تصمیم تا پایان سفر کنار شما هستیم!</p>
      </div>
     </div>
  </section>
     <!--ticket-->
  <section class="">
    <div class="title borders mb-5"><h4>بلیط های پر فروش اتوبوس</h4></div>
    <div class="cards">
      <div class="" v-for="(posts,index) in post" :key="index">
    <router-link :to="{name:'busBuy', params:{id:posts.id, day:posts.day, city1:posts.city1,city2:posts.city2,price:posts.price} }"><div class="card  mb-3">
  <div class="card-body">
    <p class="card-title mb-3">{{ posts.day }}</p>
    <div class="text">
    <h5 class="card-text"><i class="bi bi-bus-front fs-2 ms-2"></i>{{ posts.city1 }}<i class="bi bi-arrow-left ms-3 me-3"></i> {{ posts.city2 }}</h5>
    <h5 class="price">{{ posts.price }}</h5>
    </div>
  </div>
</div></router-link>
      </div>
    </div>
  </section>
  <!--end ticket-->
  <!---->
  <section>
    <div class="content mt-5">
       <div class="content-text me-5 mt-5">
          <div class="text1 mb-5">
            <h5 class="mb-3">بلیط اتوبوس</h5>
           <p>
            سفر با اتوبوس به دلیل پایین آوردن هزینه‌ها و البته راحتی و امنیت بالا مورد استقبال مسافران است. با توسعه فناوری‌های نوین و ایجاد رفتار خرید اینترنتی، دیگر نیازی نیست برای خرید بلیط اتوبوس به ترمینال شرق و سایر ترمینال‌های اتوبوس‌رانی مراجعه کنید.
علی‌بابا با توجه به اعتبار و پیشینه‌ای که در زمینه عرضه بلیط سفر و سایر خدمات گردشگری دارد، بهترین وب‌سایت رزرو بلیط اتوبوس است. شما می‌توانید در علی‌بابا بهترین قیمت را برای خرید بلیط اتوبوس پیدا کنید؛ همچنین این امکان را دارید تا از بین شرکت‎‌های اتوبوس‌رانی مختلف دست به انتخاب بزنید.
علی‌بابا به عنوان مرجع فروش بلیط اینترنتی اتوبوس، تمام مسیرهای زمینی داخل کشور و تعدادی از مسیرهای خارجی را پوشش می‌دهد.
           </p>
          </div>
          <div class="text2 mb-5">
            <h5 class="mb-3">استعلام بلیط اتوبوس</h5>
           <p>
            گاهی وقت‌ها بعد از اینکه به‌صورت اینترنتی بلیط اتوبوس خودتان را می‌خرید، نیاز دارید تا دوباره به آن بلیط اتوبوس سر بزنید و فرایند رهیری بلیط اتوبوس را انجام دهید. گاهی پیش می‌آید که باید بعضی از اطلاعات مهم و کاربردی بلیط خودتان را مجددا بررسی کنید تا روز حرکت اتوبوس به مشکل خاصی برنخورید و بدون دردسر، سفر خودتان را شروع کنید. مثلا ممکن است تاریخ حرکت اتوبوس را فراموش کرده باشید یا بخواهید شماره تعاونی و ترمینال را دوباره ببینید یا به همسفرتان خبر دهید. در چنین شرایطی لازم است که اصطلاحا استعلام بلیط اتوبوس یا رهگیری بلیط اتوبوس انجام دهید تا همه اطلاعات سفرتان کف دستتان باشد. هنگام خرید بلیط اتوبوس از علی بابا، اطلاعات بلیط و شماره سفارش برای شما پیامک و ایمیل می‌شود؛ اما اگر این پیامک و ایمیل را گم کردید، هیچ نگران نباشید. در ادامه توضیح می‌دهیم که چطور می‌توانید بلیط اتوبوستان را مجددا استعلام کنید. 
           </p>
          </div>
          <div class="text3 mb-5">
            <h5 class="mb-3">امکان استرداد بلیط اتوبوس</h5>
          <p>
            طبیعی است که گاهی اوقات، سفرتان به هر دلیلی لغو شود. در این زمان به دنبال استرداد بلیط (کنسلی) هستید. اگر بلیط‌تان را از علی‌بابا خریده‌اید، نگران نباشید؛ فرآیند استرداد بلیط اتوبوس در علی‌بابا راحت و بی‌دردسر است. کافی است وارد حساب کاربری‌تان شوید و روی نام کاربری‌تان کلیک کنید. در لیست نمایش داده شده، روی سفارشات و استردادها کلیک کنید.
در صفحه بعد شماره سفارش خود را وارد و سپس روی جستجو کلیک کنید. پس از اتمام مراحل استرداد، پولی که بابت خرید بلیط پرداخته‌اید، در کوتاه‌ترین زمان ممکن به حساب شما برمی‌گردد.
زمانی که بلیط را می‌خرید به قوانین بلیط هم دقت کنید. قوانین استرداد را در همان پنجره بلیط، در بخش «اطلاعات بیشتر» مشاهده خواهید کرد. این قوانین به شما می‌گوید که جریمه استرداد یا کنسلی بلیط اتوبوس چه میزان است. 
          </p>
          </div>
         
       </div>
      
       <div class="image-content">
          <div class="img-photo">
         <img :src="img1" class="photo" width="550px"  height="550px">
          </div>
       </div>
       
    </div>
    
  </section>
  <!---->
  <section class="question mt-5">
    <div class="title mb-5"><h4><i class="bi bi-question-circle ms-2 "></i>سوالات متداول</h4></div>
       <div class="boxs mb-5">
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-controls="collapseOne">
        <h6 class="margin"><i class="bi bi-question-circle ms-2  "></i>آیا خرید بلیط اتوبوس برای کودکان و اطفال زیر ۲ سال الزامی است</h6>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          قیمت بلیط اتوبوس برای کودکان زیر دو سال، در صورتی که صندلی‌ به آن‌ها تعلق نگیرد رایگان است. اگر کودک به استفاده از صندلی نیاز داشته باشد، باید هزینه کامل بلیط اتوبوس را برایش پرداخت کنید تا صندلی متعلق به خودتان باشد.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed flexs" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h6 class="margin space"><i class="bi bi-question-circle ms-2 "></i>نحوه رزرو بلیط اتوبوس در علی بابا چگونه است؟</h6>

      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          برای خرید اینترنتی بلیط اتوبوس در وب‌سایت یا اپلیکیشن علی‌بابا (بخش بلیط اتوبوس) مبدا، مقصد، تاریخ حرکت و تعداد بلیط خود را انتخاب می‌کنید. سپس می‌توانید بلیط‌های موجود را در تاریخ مدنظرتان ببینید و با کارت بانکی و رمز دوم، بلیط دلخواهتان را بخرید.برای مطالعه راهنمای گام‌به‌گام و تصویری خرید اینترنتی بلیط اتوبوس، می‌توانید سری به اینجا بزنید.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>استعلام بلیط اتوبوس علی‌بابا چگونه است؟</h6>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          برای استعلام بلیط اتوبوس، کافی است به وب‌سایت یا اپلیکیشن علی‌بابا بروید و بعد از مشخص‌کردن مبدا و مقصد، لیست کامل اتوبوس‌های شرکت‌های مختلف را ببینید.بعد از خرید، اگر بخواهید جزئیات بلیط را ببینید، وارد حساب کاربری‌تان شوید و روی گزینه «سفرهای من» بزنید.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>آیا بعد از خرید بلیط اتوبوس امکان تعویض صندلی وجود دارد؟</h6>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          خیر. بعد از خرید بلیط اتوبوس، امکان تعویض صندلی وجود ندارد.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>آیا می‌توانم اطلاعات بلیط اتوبوس خریداری‌شده را ویرایش کنم؟</h6>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          خیر. بعد از خرید بلیط اتوبوس، امکان ویرایش اطلاعات آن وجود ندارد. درصورت نیاز، باید بلیط خود را استرداد کنید و بلیط جدیدی با اطلاعات جدید تهیه کنید. طبیعی است که طبق قوانین، استرداد بلیط اتوبوس با درصدی جریمه همراه است (گاهی تا 100 درصد جریمه).
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>چطور مطمئن شوم خرید بلیط اتوبوس با موفقیت انجام شده؟</h6>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          اگر خرید بلیط اتوبوس با موفقیت انجام شود، یک پیامک و ایمیل از علی‌بابا برای شما ارسال خواهد شد. در این پیامک و ایمیل شماره سفارش شما، اطلاعات اتوبوس و همچنین لینک دانلود بلیط وجود دارد.
        </p>
      </div>
    </div>
  </div>



</div>
       </div>

  </section>
  <Footer/>

  </template>
  
  <script setup>
  import { reactive } from "vue"
   const img='./image/bus.webp'
   import Footer from './Footer.vue'
   const img1='./image/bus.jpg'
   const post=reactive([
  {
    id:1,
    day:'چهارشنبه 4 بهمن',
    city1:'ساری',
    city2:'رشت',
    price:'650000 تومان'
  },
  {
    id:2,
    day:'سه شنبه 1 اسفند',
    city1:'تهران',
    city2:'مشهد',
    price:'750000 تومان'
  },
  {
    id:3,
    day:'پنجشنبه 22بهمن',
    city1:'تهران',
    city2:'ساری',
    price:'950000 تومان'
  },
  {
    id:4,
    day:'شنبه 8 بهمن',
    city1:'مشهد',
    city2:'تبریز',
    price:'2500000 تومان'
  },
  {
    id:5,
    day:'چهارشنبه 14 اسفند',
    city1:'تهران',
    city2:'شیراز',
    price:'850000 تومان'
  },
  {
    id:6,
    day:'پنجشنبه 2 فروردین',
    city1:'تهران',
    city2:'کیش',
    price:'1650000 تومان'
  },
  {
    id:7,
    day:'چهارشنبه28 بهمن',
    city1:'مشهد ',
    city2:'اصفهان',
    price:'2500000 تومان'
  },
  {
    id:8,
    day:'چهارشنبه 1 فروردین',
    city1:'شیراز',
    city2:'رشت',
    price:'650000 تومان'
  }

 ])
  </script>
  
  <style scoped>
  .baner{
      position: relative;
      width: 100%;
      margin-top: 5.5rem;

  }
   .btn{
      padding: 0.5rem 2.5rem 0.5rem 2.5rem;
      margin-top:2rem;
   }
   .center{
      display: flex;
      justify-content: center;
   }
   .border{
      border: 1px solid black;
      margin-right: 0rem;
      border-radius: .7rem .7rem .7rem .7rem;
      position: absolute;
      top:325px;
      background-color: white;
   }
    .border-title{
      display: flex;
      justify-content: center;
      justify-content: space-around;
      border-bottom: 1px solid black;
    }
    .forms{
      display: flex;
      align-items: center;
    }
    .icn a{
      text-decoration: none;
      color:#617d98;
    }
    .router-link-active .bi{
  border-bottom: 3px solid #0077DB;
  color:#0077DB;
 }
 .router-link-active p{

  color:#0077DB;
 }
 .center1 a{
    margin-right: .5rem;
 }
 .center2 a{
    margin-right: .5rem;
 }
 .center4 a{
    margin-right: -.2rem;
 }
 .top{
  margin-top: 18rem;
  margin-bottom: 10rem;
 }
 .title{
  text-align: center;
  color: #617d98;
 }
 .borders{
  border-bottom: 2px solid black;
  margin-left: 25rem;
  margin-right: 25rem;
 }
.card{
  width: 80%;
  grid-column: 2rem;
  margin-right:4.5rem ;
}
.card:hover{
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: .7s;
}
 .cards a{
  text-decoration: none;
}
.text{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.price{
  color:green
}
.card-title{
  color:#0077DB
}

.cards{
  display: grid;
  grid-template-columns:1fr 1fr;
  justify-content: center;
}
.content{
  background: #f0f3f7;
  display: flex;
  align-items: center;
}

.image-content{
  margin-left: 6rem;
  margin-right: 3rem;
  border-radius:5%;
 
}
.photo{
  position: relative;
}

.image-content img{
  border-radius:5%;
  
}
.boxs{
  width: 70%;
  margin-right: 15rem;
}
.margin{
  color:#4B5259;
  font-weight: bold;
}
.icons{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
}
.icon1{
  text-align: center;
  margin-top: 3rem;
  margin-right: 6rem;
}
.icon1 p{
  font-size: .9rem!important;
}
.icon1 .bi{
  font-size: 2.5rem;
  color:rgb(15, 133, 250)
}
.icon2{
  text-align: center;
  margin-top: 3rem;
  margin-right: 6rem;
  margin-left: 5rem;

}
.icon2 p{
  font-size: .9rem!important
}
.icon2 .bi{
  font-size: 2.5rem;
  color:rgb(116, 120, 230);
}
.icon3{
  text-align: center;
  margin-top: 3rem;
  margin-right: 6rem;
  margin-left: 5rem;

}
.icon3 p{
  font-size: .9rem!important
}
.icon3 .bi{
  font-size: 2.5rem;
  color:rgb(96, 189, 38);
}
.icon4{
  text-align: center;
  margin-top: 3rem;
  margin-left: 6rem;


}
.icon4 p{
  font-size: .9rem!important;
}
.icon4 .bi{
  font-size: 2.5rem;
  color:rgb(219, 161, 0);
}
  </style>