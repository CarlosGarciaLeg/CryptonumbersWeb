import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import CryptonumDapp from '@/components/cryptonum-dapp.vue'

Vue.use(VueRouter)

const routes = [
    {
      path: '/dapp',
      name: 'cryptonum-dapp',
      component: CryptonumDapp
    },
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
      path: '/roadmap',
      name: 'roadmap',
      component: () => import(/* webpackChunkName: "about" */ '../views/Roadmap.vue')
    },
    {
      path: '/whitepapper',
      name: 'whitepapper',
      component: () => import(/* webpackChunkName: "about" */ '../views/Whitepapper.vue')
    },
    {
      path: '/',
      name: 'inicio',
      hash:'inicio',
      component: () => import(/* webpackChunkName: "about" */ '../components/SectionInicio.vue')
    },
    {
      path: '/',
      name: 'conocenos',
      hash:'conocenos',
      component: () => import(/* webpackChunkName: "about" */ '../components/SectionConocenos.vue')
    },
    {
      path: '/',
      name: 'tokenomic',
      hash:'tokenomic',
      component: () => import(/* webpackChunkName: "about" */ '../components/SectionTokenomic.vue')
    },
    {
      path: '/',
      name: 'roadmap',
      hash:'roadmap',
      component: () => import(/* webpackChunkName: "about" */ '../components/SectionRoadmap.vue')
    },
    {
      path: '/',
      name: 'team',
      hash:'team',
      component: () => import(/* webpackChunkName: "about" */ '../components/SectionTeam.vue')
    },
    {
      path: '/',
      name: 'faq',
      hash:'faq',
      component: () => import(/* webpackChunkName: "about" */ '../components/SectionFaq.vue')
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({ 
        top: document.querySelector(to.hash).offsetTop, 
        behavior: 'smooth' 
      })
    } else {
      return { x: 0, y: 0 }
    }
  }

})

export default router