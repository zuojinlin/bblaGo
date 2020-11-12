import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('/@/views/Home.vue'),
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('/@/views/Setting.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/Login.vue'),
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
