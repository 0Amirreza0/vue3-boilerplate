import { translate } from './i18n.js';
import { useLocale } from './composable';

export default (vueInstance, config) => {
  const { setLocale, locale: defaultLocale } = useLocale();
  setLocale(config?.defaultLocale ?? 'en');

  vueInstance.config.globalProperties.$t = (query, locale = defaultLocale.value) => {
    console.log({ query });
    return translate(query, locale);
  };
};
