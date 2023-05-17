import LanguageKeySet from './LanguageKeySet';

export default class ItalianKeySet extends LanguageKeySet {

  /** @override */
  get language() {

    return 'Italiana';
  }

  /** @override */
  get languageCode() {

    return 'it';
  }

  /** @override */
  getCurrencyCharacters() {

    return ['€', '$', '£' ];
  }

  /** @override */
  getLowerCaseCharactersByRow() {

    const rows = super.getLowerCaseCharactersByRow();
    rows[0].push('è', 'ì');
    rows[1].push('ò', 'à', 'ù')
    return rows;
  }

  /** @override */
  getUpperCaseCharactersByRow() {

    const rows = super.getLowerCaseCharactersByRow().map(row => row.map(character => character.toUpperCase()));
    rows[0].push('é');
    rows[1].push('ç', '°');
    return rows;
  }
}
