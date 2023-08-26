const pluginSourceMap = import.meta.globEager(['@/plug-in/*/index.js'], {
  import: 'default',
});

const pluginSourceList = Object.keys(pluginSourceMap);

export const registerPlugins = (vueInstance, pluginConfigMap = {}) => {
  pluginSourceList.forEach((source) => {
    const plugin = pluginSourceMap[source];

    const [pluginName] = source.split('/').slice(-2);
    const config = pluginConfigMap[pluginName];

    vueInstance.use(plugin, config);
  });
};
