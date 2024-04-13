<template>
  <footer>
    <div class="colums">
        <div class="colum1 mt-5">
            <div class="text"><h6>مستر بلیط</h6></div>
          <ul class="items mb-5">
             <li class="item"><a href="">درباره ما</a></li>
             <li class="item"><a href="">تماس با ما</a></li>
             <li class="item"><a href="">چرا مستر بلیط</a></li>
             <li class="item"><a href="">بیمه مسافرتی</a></li>
          </ul>
        </div>
        <div class="colum2 mt-5">
            <div class="text"><h6>خدمات مشتریان</h6></div>
          <ul class="items mb-5">
             <li class="item"><a href="">پشتیبانی آنلاین</a></li>
             <li class="item"><a href="">راهنمای خرید</a></li>
             <li class="item"><a href="">راهنمای استرداد</a></li>
             <li class="item"><a href="">پرسش و پاسخ</a></li>
          </ul>
        </div>
        <div class="colum3 mt-5">
            <div class="text"><h6>اطلاعات تکمیلی</h6></div>
          <ul class="items mb-5">
             <li class="item"><a href="">فروش سازمانی</a></li>
             <li class="item"><a href="">همکاری با آژانس</a></li>
             <li class="item"><a href="">فرصت های شغلی</a></li>
             <li class="item"><a href="">سنجش رضایت مندی</a></li>
          </ul>
        </div>
        <div class="colum4 mt-5">
            <p><i class="bi bi-vimeo ms-2"></i>مستر بلیط</p>
          <ul class="items mb-5">
             <li>تلفن پشتیبانی: ۰۲۱ -۴۳۹۰۰۰۰۰</li>
             <li>دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 11</li>
          </ul>
        </div>
    </div>
    <div class="logos">
       <a class="logo" href=""><i class="bi bi-telegram"></i></a>
       <a class="logo" href=""><i class="bi bi-instagram"></i></a>
       <a class="logo" href=""><i class="bi bi-whatsapp"></i></a>
       <a class="logo" href=""><i class="bi bi-twitter"></i></a>
    </div>
    <div class="text mt-5">
        <p class="">کلیه حقوق این وبسایت محفوض است و هرگونه کپی برداری پیگرد قانونی دارد.</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
    margin-top: 6rem;
    background-color: #f0f3f7;
}
.colums{
    display: flex;
    justify-content: center;
}

.item{
  margin-top: 2rem ;
  margin-left: 0rem;
  margin-right: 5rem;
  text-align: center;
}
.item a{
    color:#617d98;
}
.item a{
    text-decoration: none;
    font-weight: bold;
}
.item a:hover{
    color: #ffc107;
    transition: .7s;
}
.logos{
    display: flex;
    justify-content: center;
    margin-top: 2rem;
}
.logo{
    font-size:2rem ;
    color:#617d98;
    margin-left: 2rem;
}
.logo:hover{
    color: #ffc107;
    transition: .7s;
}
.text{
    text-align: center;
}
.text p{
    margin-bottom: 0;
    font-weight: bold;
    padding-bottom: 2rem;
    margin-right: -3rem;
}
.colum4{
    margin-right: 8rem;
    align-self: center;
}
.colum4 .bi{
   font-size: 4rem;
   color: #ffc107;
}
.colum4 p{
    font-size: 1.5rem;
    color: black;
    font-weight: bold;
}
.text{
    margin-right: 2.8rem;
}

</style>