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
  }
  // Outras rotas...
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Exemplo de autenticação simples
  if (to.name !== 'Login' && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
