import { computed } from 'vue';

import { translate } from '../i18n.js';
import { useLocale } from './index';

const useTranslate = (queryList) => {
  const { locale } = useLocale();

  const translations = computed(() =>
    queryList.reduce((translations, query) => {
      translations[query] = translate(query, locale.value);
      return translations;
    }, {})
  );

  return { translations };
};

export default useTranslate;
