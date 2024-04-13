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
    <div class="title mb-5"><h4>رزرو هتل</h4></div>
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

    <section class="">
      <div class="title borders mb-5"><h4>رزرو هتل</h4></div>
      <div class="cards mt-5">
        <div class="" v-for="(posts,index) in post" :key="index">
       <router-link :to="{name:'hotel2', params:{id:posts.id, hotel:posts.hotel} }"><div class="card text-bg-dark mb-5 mt-5">
          <img :src="posts.image" class="card-img"  width="100%" height="100%" alt="...">
          <div class="card-img-overlay">
           <h5 class="card-title2">{{ posts.hotel }}<i class="bi bi-chevron-left"></i></h5>
         </div>
       </div></router-link>
        </div>
      </div>
    </section>

    <section>
    <div class="content mt-5">
       <div class="content-text me-5 mt-5">
          <div class="text1 mb-5">
            <h5 class="mb-3">رزرو هتل</h5>
            <p>
              رزرو محل اقامت یکی از مهمترین مراحل برنامه‌ریزی سفر است. این بخش که اغلب بیشترین هزینه سفر را دربر می‌گیرد، تاثیر مستقیمی بر کیفیت سفر نیز دارد. به همین علل در مِستربلیط سعی کرده‌ایم که امکاناتی را فراهم کنیم تا به آسانی هتلی مناسب با سلیقه و بودجه‌تان پیدا کرده و رزرو آنلاین هتل را به آسانی و بدون هیچ چالشی انجام دهید. کافیست یکبار امتحان کنید.
            </p>
          </div>
          <div class="text2 mb-5">
            <h5 class="mb-3">رزرو هتل با بهترین قیمت‌ها</h5>
           <p>
            خوشبختانه تنوع هتل در اغلب شهرهای کشورمان آنقدر بالاست که می‌توانید هتل مناسب را پیدا کنید. البته در این میان می‌توانید در سایت مِستربلیط نیز جست‌وجو کرده و هتل‌های که تخفیف دارند را مشاهده کنید. انتخاب از میان این هتل‌ها باعث صرفه‌جویی در بودجه نیز می‌شود.

اگرچه قیمت مصوب هر هتل که به آن اصطلاحا قیمت برد می‌گویند به صورت سالانه تعیین می‌شود اما با توجه به فصل و عواملی از این دست گاهی هتل‌ها تحفیفاتی را به سامانه‌های رزرو هتل مانند مِستربلیط ارائه می‌دهند. به‌علاوه برای رزرو هتل با کمترین قیمت در صفحه هتل‌های شهر مربوطه می‌توانید فیلتر مرتب‌سازی براساس کمترین قیمت را انتخاب کنید به این ترتیب به آسانی ارزانترین هتل‌ها را می‌توانید مشاهده کنید.
           </p>
          </div>
          <div class="text3 mb-5">
            <h5 class="mb-3">نکات مهم در زمان رزرو هتل</h5>
          <p>
            اگرچه رزرو آنلاین، کار رزروکردن اقامتگاه را آسان‌تر کرده‌اند اما باید نکاتی را نیز در نظر بگیرید تا بتوانید از نتیجه رزرو رضایت داشته باشید. در ادامه برخی از مهمترین نکات در زمان رزرو آنلاین را آورده‌ایم.
          </p>
          <ul>
            <li>
              <p>
                تنها به تماشای تصاویر هتل اکتفا نکنید و حتما بخش امکانات را نیز بررسی کنید تا مطمئن شوید که اقامتگاه هر آنچه که نیاز دارید را ارائه می‌دهد.
              </p>
            </li>
            <li>
              <p>
                تنها به بررسی یک هتل اکتفا نکنید. با استفاده از فیلترهای موجود در مستربلیط می‌توانید هتل‌های هر شهر را با توجه به سلیقه و نیاز خود فیلتر کنید و دیگر اقامتگاه‌هایی که با سلیقه و بودجه شما هماهنگ باشند را نیز پیدا کنید.

              </p>
            </li>
            <li>
              <p>
                پیش از رزرو هتل، نظرات مسافران را مطالعه کنید. تجربه دیگران کمک بزرگی به شما می‌کند تا انتخابی شایسته داشته باشید.
              </p>
            </li>
            <li>
              <p>
                در نهایت هم توجه کنید که مراحل رزرو را کامل پیش بروید تا تاییدیه رزرو برای شما صادر شود. در غیر این صورت رزرو شما نهایی نشده است. اگر در زمان اجرای مراحل به مشکلی برخوردید، می‌توانید با تیم پشتیبانی مِستربلیط تماس بگرید. تیم پشتیبانی ما همیشه آماده پاسخگویی به شماست.
              </p>
            </li>

          </ul>
          </div>
         
       </div>
      
       <div class="image-content">
          <div class="img-photo">
         <img :src="img1" class="photo" width="550px"  height="550px">
          </div>
       </div>
       
    </div>
    
  </section>

  <section class="question mt-5">
    <div class="title mb-5"><h4><i class="bi bi-question-circle ms-2 "></i>سوالات متداول</h4></div>
       <div class="boxs mb-5">
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-controls="collapseOne">
        <h6 class="margin"><i class="bi bi-question-circle ms-2  "></i>ساعت ورود و خروج هتل‌ها چه قوانینی دارد؟</h6>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          در همه هتل‌ها، ساعت ورود و تحویل اتاق (check-in) 14 ظهر و ساعت خروج و پس دادن اتاق (check-out) 12 ظهر است. اگر تفاوتی وجود داشته باشد، هنگام رزرو هتل به مسافر اعلام می‌شود.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed flexs" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h6 class="margin space"><i class="bi bi-question-circle ms-2 "></i>هزینه اقامت کودکان در هتل چگونه است؟</h6>

      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          در قانون کلی هتل‌ها، پذیرش کودکان زیر دو سال که به تخت جداگانه احتیاج ندارند رایگان است.

        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>در «مستر بلیط» امکان رزرو چه اقامتگاه‌هایی وجود دارد؟</h6>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          شما می‌توانید از بین هتل‌های 1 تا 5 ستاره، هتل آپارتمان‌های 1 تا 3 ستاره و مهمانپذیرها، اقامتگاه مدنظرتان را رزرو کنید.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>امکان کنسل کردن رزرو هتل و دریافت وجه وجود دارد؟</h6>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          بله؛ اما قوانین اینکار برای تمام هتل‌ها یکسان نیست. در «مستر بلیط» شرایط کنسلی و بازگشت وجه برای هر اقامتگاه هنگام رزرو به طور کامل به شما اعلام می‌شود.

        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>واچر چیست؟</h6>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          رسید پرداخت و تاییدیه رزرو اقامتگاه را «واچر» می‌گویند. واچر پس از انجام پرداخت توسط شما از طرف سیستم رزرواسیون علی بابا صادر می‌شود و در اختیار شما قرار می‌گیرد.

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
   const img='./image/hotel.webp'
   const img1='./image/hotel1.jpg'

   const post=reactive([
  {
    id:1,
    image:'./image/mashad.jpg',
    hotel:' مشهد'
  },
  {
    id:2,
    image:'./image/kish.jpg',
    hotel:' کیش'
  },
  {
    id:3,
    image:'./image/tehran.jpg',
    hotel:' تهران'
  },
  {
    id:4,
    image:'./image/isfahan.webp',
    hotel:' اصفهان'
  },
  {
    id:5,
    image:'./image/qeshm.webp',
    hotel:' قشم'
  },
  {
    id:6,
    image:'./image/ramsar.webp',
    hotel:' رامسر'
  },
  {
    id:7,
    image:'./image/tabriz.webp',
    hotel:' تبریز'
  },
  {
    id:8,
    image:'./image/rasht.webp',
    hotel:' رشت'
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
  margin-top:18rem;
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
 .cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: .1rem;
 }
.card{
  width: 18rem;
  height: 15rem;
  margin-right: 2.5rem;
  border: none;
 }
 .card-title2{
  margin-top:11rem
  
 }
 .card-title2 .bi{
   margin-right: 8rem;
   font-size: 1.5rem;   
 }
 
 .card:hover{
  transform: scale(1.1);
  transition: .7s;
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