import LanguageKeySet from './LanguageKeySet';

export default class DanishKeySet extends LanguageKeySet {

  /**
  * @override
  */
  get language() {

    return 'Dansk';
  }

  /**
  * @override
  */
  get languageCode() {

    return 'da';
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
    rows[1].push('æ', 'ø');
    return rows;
  }
}
