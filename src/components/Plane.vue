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
    <div class="title mb-5"><h4>بلیط هواپیما</h4></div>
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
  <section class="mt-5">
    <div class="title borders mb-5 mt-5"><h4>بلیط های پر فروش هواپیما</h4></div>
    <div class="cards">
      <div class="" v-for="(posts,index) in post" :key="index">
    <router-link :to="{name:'planeBuy', params:{id:posts.id, day:posts.day, city1:posts.city1,city2:posts.city2,price:posts.price} }"><div class="card  mb-3">
  <div class="card-body">
    <p class="card-title mb-3">{{ posts.day }}</p>
    <div class="text">
    <h5 class="card-text"><i class="bi bi-airplane fs-2 ms-2"></i>{{ posts.city1 }}<i class="bi bi-arrow-left ms-3 me-3"></i> {{ posts.city2 }}</h5>
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
            <h5 class="mb-3">بلیط هواپیما</h5>
            <p>علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد. در ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛ اما به مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه شد.
            </p>
          </div>
          <div class="text2 mb-5">
            <h5 class="mb-3">مزایای خرید بلیط هواپیما از مِستربلیط</h5>
            <p>
              راحتی و سرعت در مراحل خرید بلیط هواپیما را می‌توان بارزترین نقطه قوت مِستربلیط در نظر گرفت. کافیست خودتان امتحان کنید تا متوجه روان و ساده بودن رابط کاربری سامانه شوید. باورمان این است که همراه شما هستیم تا خریدی رضایت‌بخش را تجربه کنید.

در گام بعد پشتیبانی 24 ساعته مِستربلیط است. هر ساعتی از شبانه روز که تماس بگیرید با خوش‌رویی و حوصله پاسخ شما داده خواهد شد. بنابراین به ساعت خود نگاه نکنید و هر زمان که در خرید و پس از آن به مشکلی برخورد کردید تماس بگیرید، مطمئن باشید که تیم پشتیبانی در کنار شماست.

            </p>
          </div>
          <div class="text3 mb-5">
            <h5 class="mb-3">امکان استرداد بلیط هواپیما</h5>
          <p>
            کی دیگر از امکانات علی‌بابا استرداد آنلاین بلیط هواپیما (کنسلی بلیط) است. در صورتی که پس از رزرو بلیط هواپیما برنامه سفرتان تغییر کرده، به راحتی می‌توانید طبق قوانین کنسلی پرواز داخلی، بلیط هواپیمای خود را کنسل کنید. پس از استرداد، پول شما در کمترین زمان ممکن به حسابتان برگردانده می‌شود. شما برای خرید اینترنتی بلیط هواپیما از علی‌بابا می‌توانید از تلفن همراه، رایانه شخصی یا تبلت استفاده کنید. علی‌بابا در همه این ابزارها کاربرپسند است و شما خریدی آسان را تجربه خواهید کرد. همچنین امکان نصب و استفاده از اپلیکیشن علی‌بابا برای گوشی های اندروید و آیفون وجود دارد.
          </p>
          </div>
          <div class="text4 mb-5">
            <h5 class="mb-3">رزرو بلیط هواپیما از معتبرترین ایرلاین‌ها</h5>
            <p>شما برای خرید بلیط هواپیما از بین ایرلاینهای مختلف حق انتخاب دارید و می‌توانید از ایرلاینهای ماهان، زاگرس، کیش ایر، قشم ایر، آسمان، کاسپین، تابان، وارش یا معراج، بلیط پرواز داخلی خود را خریداری کنید.

هر یک از این ایرلاین ها ویژگیها و مشخصات خود را دارند. برخی امکانات و خدمات رفاهی بیشتر دارند و برخی دیگر بلیط هواپیما را با قیمت به صرفه تری ارائه می‌دهند. زمانی که در علی‌بابا لیست بلیط تمام این ایرلاین ها را مشاهده می‌کنید، می‌توانید از بین آنها انتخاب کنید.

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
        <h6 class="margin"><i class="bi bi-question-circle ms-2  "></i>چند روز قبل از پرواز، بلیط هواپیما را بخریم؟</h6>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed flexs" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <h6 class="margin space"><i class="bi bi-question-circle ms-2 "></i>در هر پرواز، میزان بار مجاز چقدر است؟</h6>

      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟</h6>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته باشید.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم، امکان انتخاب صندلی مورد نظرمان وجود دارد؟</h6>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب صندلی وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی امکان‌پذیر است.

        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟</h6>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <h6 class="margin"><i class="bi bi-question-circle ms-2 "></i>آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟</h6>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>
          وقتی از علی‌بابا یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد.
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
import PlaneBuy from "./PlaneBuy.vue";
 const img='./image/plane.webp'
 const img1='./image/هواپیما.webp'
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