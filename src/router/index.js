import { createRouter, createWebHashHistory } from 'vue-router';
import ROUTES from './routes.js';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: ROUTES,
});

export default router;
