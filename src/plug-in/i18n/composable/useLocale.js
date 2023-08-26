import { computed, ref } from 'vue';
import { supportedLocaleList } from '../dictionary';

const locale = ref('');

const useLocale = () => {
  const getLocale = computed(() => locale.value);

  const setLocale = (newLocale) => {
    if (locale.value === newLocale) return;

    if (!supportedLocaleList.includes(newLocale))
      throw new Error(`Unsupported locale "${newLocale}"`);

    locale.value = newLocale;
  };

  return { locale: getLocale, setLocale, supportedLocaleList };
};

export default useLocale;
