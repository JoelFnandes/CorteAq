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
  // Outras rotas...
];

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('authToken'); // Exemplo de autenticação simples
//   if (to.name !== 'Login' && !isAuthenticated) {
//     next({ name: 'Login' });
//   } else {
//     next();
//   }
// });

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
