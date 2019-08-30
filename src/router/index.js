import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/pages/login/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      // component: Login,
      component: () => import('@/pages/login/Login')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home/Home')
    }
  ]
})
