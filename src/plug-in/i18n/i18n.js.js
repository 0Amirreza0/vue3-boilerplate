import { dictionaries } from './dictionary';

//FIXME: move this somewhere more general
const generateError = (code, query) => {
  //TODO: use different error base on code
  throw new Error(`Undefined query "${query}"`);
};

export const translate = (query, locale) => {
  console.log(query, locale);
  const dictionary = dictionaries[locale];
  if (!dictionary) throw new Error(`Unsupported locale "${locale}"`);

  try {
    const queryAsList = query.split('.');
    const queryTranslation = queryAsList.reduce((dictionaryChunk, queryChunk) => {
      return dictionaryChunk[queryChunk];
    }, dictionary);

    if (!queryTranslation) generateError(undefined, query);

    return queryTranslation;
  } catch (error) {
    throw generateError(undefined, query);
  }
};

export default { translate };
