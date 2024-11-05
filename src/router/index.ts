import { createWebHistory, createRouter } from 'vue-router'

import WatchList from '@/views/WatchList.vue'
import MiquelView from '@/views/MiquelView.vue'

const routes = [
  { path: '/', component: MiquelView },
  { path: '/watchlist', component: WatchList },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
