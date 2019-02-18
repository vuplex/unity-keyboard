import LanguageKeySet from './LanguageKeySet';

export default class RussianKeySet extends LanguageKeySet {

  /**
  * @override
  */
  get language() {

    return 'русский';
  }

  /**
  * @override
  */
  get languageCode() {

    return 'ru';
  }

  /**
  * @override
  */
  getCurrencyCharacters() {

    return [ '₽' ];
  }

  /**
  * @override
  */
  getLowerCaseCharactersByRow() {

    return [
      [ 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ' ],
      [ 'ф','ы','в','а','п','р','о','л','д','ж','э' ],
      [ 'я','ч','с','м','и','т','ь','б','ю', '!', '?' ]
    ];
  }

  /**
  * @override
  */
  getAlphabeticCharacterSetKeySymbol() {

    return 'АБВ';
  }
}
