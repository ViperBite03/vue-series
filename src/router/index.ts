import { createWebHistory, createRouter } from 'vue-router'

import MiquelView from '@/views/MiquelView.vue'

const routes = [
  { path: '/', component: () => import('@/views/WatchList.vue') },
  { path: '/miquelview', component: MiquelView },
  { path: '/:name/:id', component: () => import('@/views/SingleShow.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
