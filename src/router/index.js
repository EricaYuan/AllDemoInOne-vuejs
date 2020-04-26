import Vue from 'vue'
import VueRouter from 'vue-router'
import TourGuid from '../views/TourGuid.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'TourGuid',
      component: TourGuid
    },
    {
      path: '/eventbus',
      name: 'EventBus',
      component: () => import('../views/EventBus.vue')
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
