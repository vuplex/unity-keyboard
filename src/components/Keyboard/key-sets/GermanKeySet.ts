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
      [ 'q', 'w', 'e', 'r', 't', 'z', 'u', 'i', 'o', 'p', 'ü' ],
      [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ö', 'ä' ],
      [ 'y', 'x', 'c', 'v', 'b', 'n', 'm', '!', '?' ]
    ];
  }
}
