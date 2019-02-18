import LanguageKeySet from './LanguageKeySet';

export default class SpanishKeySet extends LanguageKeySet {
  /**
  * @override
  */
  get language() {

    return 'Español';
  }

  /**
  * @override
  */
  get languageCode() {

    return 'es';
  }

  /**
  * @override
  */
  getCurrencyCharacters() {

    return [ '$', '€' ];
  }

  /**
  * @override
  */
  getLowerCaseCharactersByRow() {

    const rows = super.getLowerCaseCharactersByRow();
    rows[1].push('ñ');
    return rows;
  }

  /**
  * @override
  */
  getSpecialCharactersByRow() {

    const rows = super.getSpecialCharactersByRow();
    rows[3].splice(1, 2, 'º', 'ª');
    return rows;
  }
}
