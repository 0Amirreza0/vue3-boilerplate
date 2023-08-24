const ROUTES = [
  {
    path: '/playground',
    name: 'playground',
    component: () => import('@/views/playground/playground-view.vue'),
    meta: {
      layout: 'panel',
      title: 'Playground',
    },
  },
];

export default ROUTES;
