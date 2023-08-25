const pluginSourceMap = import.meta.globEager(['@/plug-in/*/index.js'], {
  import: 'default',
});

const plugins = Object.values(pluginSourceMap);

export const registerPlugins = (vueInstance) => {
  plugins.forEach((plugin) => vueInstance.use(plugin));
};
