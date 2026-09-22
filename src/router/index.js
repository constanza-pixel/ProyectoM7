import { createRouter, createWebHistory } from 'vue-router';
import ProductList from '@/components/ProductList.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductList
  }
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
