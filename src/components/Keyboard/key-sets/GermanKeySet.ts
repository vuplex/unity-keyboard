import LanguageKeySet from './LanguageKeySet';

/**
* QWERTZ keyboard configuration used in Germany.
*/
export default class GermanKeySet extends LanguageKeySet {
  /**
  * @override
  */
  get language() {

    return 'Deutsche';
  }

  /**
  * @override
  */
  get languageCode() {

    return 'de';
  }

  /**
  * @override
  */
  getCurrencyCharacters() {

    return [ '€' ];
  }

  /**
  * @override
  */
  getLowerCaseCharactersByRow() {
    return [
      [ 'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p' ],
      [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
      [ 'y', 'x', 'c', 'v', 'b', 'n', 'm', '!', '?' ]
    ];
  }
}
