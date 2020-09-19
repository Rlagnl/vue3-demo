import { createRouter, createWebHashHistory } from 'vue-router'
const home = () => import(/* webpackChunkName: "home" */ './components/Home.vue')
const detail = () => import(/* webpackChunkName: "home" */ './components/Detail.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: "/home",
    name: "home",
    component: home
  }, {
    path: "/detail/:id",
    name: "detail",
    component: detail
  }
]
const router = createRouter({
  // vue-router有hash和history两种路由模式，可以通过createWebHashHistory和createWebHistory来指定
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  
})

router.afterEach(() => {
  
})

export default router
