const ROUTES = [
  {
    path: '/',
    redirect: { name: 'note-list' },
  },
  {
    name: 'note-list',
    path: '/note-list',
    component: () => import('@/views/note-list.vue'),
  },
];

export default ROUTES;
