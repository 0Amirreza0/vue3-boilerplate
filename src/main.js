import { createApp as createVueApp } from 'vue';

import App from '@/app.vue';
import { registerPlugins } from '@/plug-in';

const createApplication = async () => {
  const vueAppInstance = createVueApp(App);

  await registerPlugins(vueAppInstance);

  vueAppInstance.mount('#app');
};

createApplication();
