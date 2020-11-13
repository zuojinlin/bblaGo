export default [
  {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/User/Login.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('/@/views/User/Register.vue'),
  },
]
