import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'homepage', component: () => import('../pages/homePage.vue') },
  { path: '/test', name: 'test', component: () => import('../pages/testPage.vue') },
  { path: '/group', name: 'group', component: () => import('../pages/groupPage.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
