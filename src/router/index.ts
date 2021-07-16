import { createRouter, createWebHistory } from "vue-router";
const routerHistorys = createWebHistory()
const routes = [
  {
    path: '/',
    component: () => import('@/components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: routerHistorys,
  routes
})

export default router