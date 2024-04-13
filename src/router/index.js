import { createRouter, createWebHistory } from 'vue-router';
import plane from '../components/plane.vue'
import bus from '../components/Bus.vue'
import train from '../components/Train.vue'
import hotel from '../components/Hotel.vue'
import planeBuy from '../components/PlaneBuy.vue'
import trainBuy from '../components/TrainBuy.vue'
import busBuy from '../components/BusBuy.vue'
import hotel2 from '../components/Hotel2.vue'
import hotelBuy from '../components/HotelBuy.vue'
import register from '../components/register.vue'
import login from '../components/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:'/', name:'plane' , component:plane},
    {path:'/planeBuy/:id/:day/:city1/:city2/:price', name:'planeBuy' , component:planeBuy},
    {path:'/bus', name:'bus' , component:bus},
    {path:'/bus/busBuy/:id/:day/:city1/:city2/:price', name:'busBuy' , component:busBuy},
    {path:'/train', name:'train' , component:train},
    {path:'/train/trainBuy/:id/:day/:city1/:city2/:price', name:'trainBuy' , component:trainBuy},
    {path:'/hotel', name:'hotel' , component:hotel},
    {path:'/hotel/hotel2/:id/:hotel', name:'hotel2' , component:hotel2},
    {path:'/hotel/hotelBuy/:id/:name/:image', name:'hotelBuy' , component:hotelBuy},
    {path:'/register', name:'register' , component:register},
    {path:'/login', name:'login' , component:login},



  
  ]
})

export default router
