import LanguageKeySet from './LanguageKeySet';

export default class SwedishKeySet extends LanguageKeySet {

  /**
  * @override
  */
  get language() {

    return 'Svenska';
  }

  /**
  * @override
  */
  get languageCode() {

    return 'sv';
  }

  /**
  * @override
  */
  getCurrencyCharacters() {

    return [ '£' ];
  }

  /**
  * @override
  */
  getLowerCaseCharactersByRow() {

    const rows = super.getLowerCaseCharactersByRow();
    rows[0].push('å');
    rows[1].push('ö', 'ä');
    return rows;
  }
}
