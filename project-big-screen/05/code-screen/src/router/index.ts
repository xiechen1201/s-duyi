import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/screen',
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    meta: { title: '大屏展示' },
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
