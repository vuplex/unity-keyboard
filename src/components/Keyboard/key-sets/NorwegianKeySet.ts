import LanguageKeySet from './LanguageKeySet';

export default class DanishKeySet extends LanguageKeySet {

  /**
  * @override
  */
  get language() {

    return 'Norsk';
  }

  /**
  * @override
  */
  get languageCode() {

    return 'no';
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
    rows[1].push('ø', 'æ');
    return rows;
  }
}
