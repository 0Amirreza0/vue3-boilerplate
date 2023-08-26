const dictionaryMap = import.meta.globEager(['@/plug-in/i18n/dictionary/*.json'], {
  import: 'default',
});

export const supportedLocaleList = [];

const dictionaryPathList = Object.keys(dictionaryMap);
export const dictionaries = dictionaryPathList.reduce((dictionaries, dictionaryPath) => {
  const dictionary = dictionaryMap[dictionaryPath];

  const [dictionaryFileName] = dictionaryPath.split('/').slice(-1);
  const [dictionaryName] = dictionaryFileName.split('.json');

  supportedLocaleList.push(dictionaryName);

  return { ...dictionaries, [dictionaryName]: dictionary };
}, {});

export default { dictionaries, supportedLocaleList };
