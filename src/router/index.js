import { createRouter, createWebHashHistory } from 'vue-router';
import Config from '@/router/config';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: Config.routes,
});

Config.guards(router);

export default router;
