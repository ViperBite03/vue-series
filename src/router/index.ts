import { createWebHistory, createRouter } from 'vue-router'

import WatchList from '@/views/WatchList.vue'
import MiquelView from '@/views/MiquelView.vue'

const routes = [
  { path: '/', component: WatchList },
  { path: '/miquelview', component: MiquelView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
