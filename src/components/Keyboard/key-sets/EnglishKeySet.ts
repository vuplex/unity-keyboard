import LanguageKeySet from './LanguageKeySet';

export default class EnglishKeySet extends LanguageKeySet {
  /**
  * @override
  */
  get language() {

    return 'English';
  }

  /**
  * @override
  */
  get languageCode() {

    return 'en';
  }

  /**
  * @override
  */
  getCurrencyCharacters() {

    return [ '$', '€', '£', '₹' ];
  }
}
