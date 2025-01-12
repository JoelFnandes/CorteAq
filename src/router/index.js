import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/pages/Login.vue';

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
  },

  {
    path: '/home',
    name: 'Home',
    component: () => import('@/pages/HomeCliente.vue')
  },

  {
    path: "/registro",
    name: 'Register',
    component: () => import('@/pages/Register.vue')
  },

  {
    path: "/home-barbeiro",
    name: 'HomeBarbeiro',
    component: () => import('@/pages/HomeBarbeiro.vue')
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('token'); // Exemplo de autenticação simples
//   if ((to.name !== 'Login' || to.name !== 'Register') && !isAuthenticated) {
//     next({ name: 'Login' });
//   } else {
//     next();
//   }
// });

export default router;
