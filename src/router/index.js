import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/Main.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/FAQ.vue'),
    },
    {
      path: '/:id',
      name: 'detail',
      component: () => import('../views/Detail.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue')
    }
   ],
})

export default router
