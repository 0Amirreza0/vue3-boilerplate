const modulesPathMap = import.meta.glob(['@/plug-in/*/index.js'], {
  import: 'default',
});

const modules = Object.values(modulesPathMap);

export const registerPlugins = async (vueInstance) => {
  const modulePromiseList = modules.map((module) => module());
  const plugins = await Promise.all(modulePromiseList);

  plugins.forEach((plugin) => vueInstance.use(plugin));
};
