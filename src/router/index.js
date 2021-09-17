import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
    },
    {
      path: '/tokenomic',
      name: 'tokenomic',
      component: () => import(/* webpackChunkName: "about" */ '../views/Tokenomic.vue')
    },
    {
      path: '/roadmap',
      name: 'roadmap',
      component: () => import(/* webpackChunkName: "about" */ '../views/Roadmap.vue')
    },
    {
      path: '/whiterpapper',
      name: 'whiterpapper',
      component: () => import(/* webpackChunkName: "about" */ '../views/Whiterpapper.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
     return { x: 0, y: 0 }
     }
})

export default router