import { createWebHistory, createRouter } from 'vue-router'

import ContentView from '@/views/ContentView.vue'
import MiquelView from '@/views/MiquelView.vue'

const routes = [
  { path: '/', component: ContentView },
  { path: '/miquelview', component: MiquelView },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
