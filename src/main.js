import { createApp as createVueApp } from 'vue';

import App from '@/app.vue';
import { registerPlugins } from '@/plug-in';

const createApplication = () => {
  const vueAppInstance = createVueApp(App);

  registerPlugins(vueAppInstance);

  vueAppInstance.mount('#app');
};

createApplication();
