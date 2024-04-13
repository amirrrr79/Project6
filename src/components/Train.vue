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
          <router-view></router-view>
  
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
    <div class="title mb-5"><h4>بلیط قطار</h4></div>
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
    <div class="title borders mb-5"><h4>بلیط های پر فروش قطار</h4></div>
    <div class="cards">
      <div class="" v-for="(posts,index) in post" :key="index">
    <router-link :to="{name:'trainBuy', params:{id:posts.id, day:posts.day, city1:posts.city1,city2:posts.city2,price:posts.price} }"><div class="card  mb-3">
  <div class="card-body">
    <p class="card-title mb-3">{{ posts.day }}</p>
    <div class="text">
    <h5 class="card-text"><i class="bi bi-train-front fs-2 fs-2 ms-2"></i>{{ posts.city1 }}<i class="bi bi-arrow-left ms-3 me-3"></i> {{ posts.city2 }}</h5>
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
            <h5 class="mb-3">بلیط قطار</h5>
           <p>
            هر کسی که یک بار با قطار سفر کرده باشد می‌داند که قطار امن است و همین موضوع آن را به یکی از مناسب‌ترین وسائل نقلیه برای سفر به مقاصد دور و نزدیک تبدیل کرده. در سفر با قطار می‌توانید بدون نگرانی از نوسانات شرایط جوی، کمبود سوخت، تصادفات و... لحظات آرامی را سپری کنید. در کنار این موارد، موسیقی ریتمیک حرکت قطار روی ریل به خودی خود موجب آرامش سرنشینان می‌شود؛ حتی بعضی از مسافران ادعا کرده‌اند که این ریتم منظم موجب می‌شود تا خواب راحت‌تری در قطار داشته باشند.
علاوه بر امنیت، سفر با قطار مزایای دیگری هم دارد. قیمت مناسب، فضای صمیمی و راحت کوپه، صرف غذا در بوفه و قدم زدن در راهرو باعث می‌شود تا سختیِ مسیرهای طولانی به حداقل رسیده و خاطره خوشی از سفر در ذهن مسافر باقی بماند.
           </p>
          </div>
          <div class="text2 mb-5">
            <h5 class="mb-3">قیمت بلیط قطار</h5>
           <p>
            بعضی از شرکت‌های ریلی امکان حمل خودرو را برای شما در نظر گرفته‌اند که در صورت انتخاب این گزینه، مبلغی به هزینه‌های سفر شما اضافه می‌شود. برای اطلاع از آخرین قیمت بلیط قطار در مسیر مورد نظر خود کافیست سری به سامانه علی‌بابا بزنید و با مشخص کردن مبدا، مقصد و تاریخ سفر، لیستی از پیشنهادات را دریافت کنید. برای شناسایی ارزان‌ترین بلیط قطار گزینه «مرتب‌سازی بر اساس قیمت» به کمک شما می‌آید.جایگاهی که قطار در حمل و نقل عمومی به خود اختصاص داده، جایگاهی میانه است. در ایران سفر با هواپیما را اغلب هم معنا با سفرهای لوکس و سفر با اتوبوس را سفرهایی مقرون به صرفه می‌دانند‌، در نتیجه سفر با قطار انتخابی بین این دو است.
           </p>
          </div>
          <div class="text3 mb-5">
            <h5 class="mb-3">رزرو بلیط قطار</h5>
          <p>
            رزرو بلیط قطار، سفر با قطار را راحت‌تر از همیشه کرده است. برای خرید اینترنتی بلیط قطار کافی است وارد وب‌سایت علی‌بابا شوید، سپس با وارد کردن نام شهر مبدا و مقصد و تاریخ رفت و برگشت می‌توانید تمام قطارهای شرکت‌های ریلی در مسیر مورد نظرتان را مشاهده کنید. بسته به ساعت حرکت، امکانات قطار و بودجه می‌توانید مناسب‌ترین بلیط را انتخاب کنید و با نهایی کردن رزرو بلیط قطار و پرداخت آن، بلیط خود را به صورت آنلاین دریافت کنید.


                      </p>
          </div>
          <div class="text4 mb-5">
            <h5 class="mb-3">شرکت‌های ریلی در ایران</h5>
          <p>
            به صورت کلی شرکت رجا و شرکت‌های زیرمجموعه سفیر و شرکت فدک، تامین‌کنندگان قطارهای خطوط ریلی ایران هستند و علی‌بابا بخش اعظمی از بلیط این شرکت‌ها را از طریق سامانه علی‌بابا به متقاضیان عرضه می‌کند. شرکت‌های زیرمجموعه سفیر عبارتند از: راه آهن شرقی بنیاد (بن ریل)، جوپار، ریل سیر کوثر، ریل ترابر سبا، مهتاب سیر جم (مهتاب)، قطارهای مسافری نور (نورالرضا)، رعد و پارس لاریم.

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
        <h6 class="margin"><i class="bi bi-question-circle ms-2  "></i>در راه آهن و هنگام سوار شدن به قطار چه مدارکی لازم است؟</h6>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
            شما برای ورود به قطار باید این مدارک را با خود به همراه داشته باشید: پرینت بلیط و کارت شناسایی معتبر.
در صورت داشتن تخفیف جانباز یا خانواده شهدا، به همراه داشتن کارت معتبر مربوطه نیاز ضروری است.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed flexs" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h6 class="margin space"><i class="bi bi-question-circle ms-2 "></i>مقدار بار مجاز در قطار چقدر است؟</h6>

      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
            هر مسافر می‌تواند وسایل ضروری سفر خود را همراه ببرد به شرط آن‌كه حجم آن از ابعاد 75 سانتی متر و وزن 30 كیلوگرم تجاوز نكند. به عنوان مثال مسافر می‌تواند كیف‌دستی، بسته‌ و چمدان‌های كوچك محتوی لوازم شخصی، صندلی چرخ‌دار بیمار، كالسكه بچه و قفس كوچك پرندگان ریزجثه (حداكثر در ابعاد 40 سانتی‌متر) را به همراه داشته باشد.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>روال استرداد یا کنسلی بلیط قطار چگونه است؟</h6>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
            مسافر می‌تواند تا 60 دقیقه قبل از حرکت قطار، بلیط یا بلیط‌های خریداری‌شده را به صورت آنلاین استرداد کند.
برای استرداد بلیط قطار پس از زمان ذکرشده، مسافر باید تا قبل از حرکت قطار، و با ارایه بلیط چاپی و کارت شناسایی به صورت حضوری به یکی از مراکز فروش بلیط قطار مراجعه کند.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>قیمت بلیط برای کودک و نوزاد چگونه است؟</h6>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
            قیمت بلیط کودک نیم‌بها و نوزاد 10 درصد مبلغ بزرگسال است.

        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>در صورت مفقودی بلیط قطار، چه باید کرد؟</h6>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
            در صورت مفقودی بلیط، مسافر می‌تواند در زمان اداری به ایستگاه‌های راه‌آهن که سیستم آنلاین فروش بلیط دارند، مراجعه کند و دوباره بلیط را دریافت کند. همچنین به شرط حضور به‌موقع (حداكثر ۴۵ دقیقه مانده به حركت) در ایستگاه‌های راه‌آهن كه سیستم فروش بلیط آنلاین دارند و در وقت اداری، بلیط المثنی طبق آیین‌نامه‌ مربوط صادر می‌شود.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>آیا خانوم‌ها می‌توانند بلیط قطار را برای کوپه مخصوص بانوان بخرند؟</h6>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
            بله این امکان وجود دارد. خانوم‌ها می‌توانند برای آرامش و راحتی خود در طول سفر، بلیط قطار را برای کوپه مخصوص بانوان بخرند. البته کوپه مخصوص آقایان هم برای آن‌ها درنظر گرفته شده است.

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
   import Footer from './Footer.vue'
   const img='./image/train.webp'
   const img1='./image/train2.jpg'
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