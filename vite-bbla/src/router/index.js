import { createRouter, createWebHistory } from 'vue-router'
import UserRoutes from './UserRoutes/UserRoutes'
// console.log(UserRoutes)
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
  ...UserRoutes,
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
