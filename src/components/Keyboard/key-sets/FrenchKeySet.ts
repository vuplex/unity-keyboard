import LanguageKeySet from './LanguageKeySet';

/**
* AZERTY keyboard configuration used in France.
*/
export default class FrenchKeySet extends LanguageKeySet {
  /**
  * @override
  */
  get language() {

    return 'Français';
  }

  /**
  * @override
  */
  get languageCode() {

    return 'fr';
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
      [ 'a', 'z', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
      [ 'q', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm' ],
      [ 'w', 'x', 'c', 'v', 'b', 'n', `'`, '/' ]
    ];
  }
}
