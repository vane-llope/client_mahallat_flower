import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/loginView.vue')
  },
  {
    path: '/panel',
    name: 'panel',
    component: () => import( '../views/panelView.vue'),
   // meta : {requiresAuth : true}
  },

  {
    path : '/product/info',
    name : 'productInfo',
    component : () => import ('../views/pruductsInfoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*
router.beforeEach( (to,from,next) => {
  var loggedIn = null
  if(store.state.authenticated.refreshToken.length > 0){
     loggedIn = true 
  }
  else loggedIn = false
 
  console.log('routes : ' , loggedIn)
  if(to.matched.some(record => record.meta.requiresAuth )){
    if(!loggedIn){next('/')}
    else {next()}
  }
  else
    next()
})*/

export default router
