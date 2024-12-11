import { createRouter, createWebHistory } from 'vue-router'
import MusicView from '../views/MusicView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/music',
      name:'music',
      component: MusicView
    },
  ],
})

export default router
