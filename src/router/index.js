import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '@/views/Homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Liste BDE Informatique FACTION',
    component: Homepage,
    meta: {layout: 'hideSidebar'}
  },
  {
    path: '/team',
    name: 'Notre équipe',
    component: () => import('@/views/Team.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0};
  },
  routes
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.name
  })
})
export default router
