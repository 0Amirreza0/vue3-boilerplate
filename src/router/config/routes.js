const ROUTES = [
  {
    path: '/playground',
    name: 'playground',
    component: () => import('@/views/playground/playground.vue'),
    meta: {
      layout: 'panel'
    }
  },
];

export default ROUTES;
