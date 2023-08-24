import eventBus from '@/services/event-bus';

const beforeEach = (to, from) => {
  eventBus.publish('router:beforeEach', to, from);
};

const afterEach = (to) => {
  eventBus.publish('router:afterEach', to);

  const title = to.meta.title;
  if (!title) return;

  document.title = title;
};

const _init = (router) => {
  router.afterEach(afterEach);
  router.beforeEach(beforeEach);
};

export default _init;
