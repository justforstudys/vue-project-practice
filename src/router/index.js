import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/pages/login/Login'

Vue.use(Router)

let router =  new Router({
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
      component: () => import('@/pages/home/Home'),
      children: [
        {
          path: '/computed',
          name: 'home.computed',
          component: () => import('@/pages/computed/Computed'),
        },
        {
          path: '/assets',
          name: 'home.computed',
          component: () => import('@/pages/assets/Assets'),
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  //路由守卫，可用于做权限校验
  next();
})

export default router;