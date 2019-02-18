import React from 'react';
import EventEmitter from 'events';
import KeyboardLayout from '../KeyboardLayout';
import ShiftKeyIcon from '../ShiftKeyIcon';
import SimpleKeyDefinition from '../../../models/SimpleKeyDefinition';
import sendKeyboardInput from '../../../utils/sendKeyboardInput';

export default abstract class LanguageKeySet extends EventEmitter {

  private _layout = KeyboardLayout.LOWERCASE

  abstract get language(): string;

  abstract get languageCode(): string;

  get layout() {

    return this._layout;
  }

  protected getAlphabeticCharacterSetKeySymbol() {

    return 'ABC';
  }

  /**
  * Allows a keyset to change the currency character without having to override
  * all of the special characters
  */
  protected getCurrencyCharacters() {

    return [ '$', '€' ];
  }

  protected getLowerCaseCharactersByRow() {
    return [
      [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
      [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
      [ 'z', 'x', 'c', 'v', 'b', 'n', 'm', '!', '?' ]
    ];
  }

  protected getSpecialCharactersByRow() {
    return [
      [ '@', '#', ...this.getCurrencyCharacters(), '%', '&', '*', '-', '+' ],
      [ '~', '`', '"', '\'', ':', ';', '_', '=', '\\', '/' ],
      [ '{', '}', '[', ']', '<', '>', '^', '|', '(', ')' ],
      [ '@', ',', '.']
    ];
  }

  public getRows() {

    return this._layout === KeyboardLayout.SPECIAL ? this._getSpecialCharacterRows() : this._getAlphabeticCharactersRows();
  }

  protected getUpperCaseCharactersByRow() {

    return this.getLowerCaseCharactersByRow().map(row => row.map(character => character.toUpperCase()));
  }

  private _createSimpleKeyDefinition = (value) => new SimpleKeyDefinition(value, this._handleSimpleKeyPress);

  private _getAlphabeticCharactersRows() {

    const isUppercase = [ KeyboardLayout.UPPERCASE, KeyboardLayout.CAPS_LOCK ].includes(this._layout);
    const charactersByRow = isUppercase ? this.getUpperCaseCharactersByRow() : this.getLowerCaseCharactersByRow();
    const rows = [
      charactersByRow[0].map(this._createSimpleKeyDefinition),
      charactersByRow[1].map(this._createSimpleKeyDefinition),
      [ this._getShiftKey(), ...charactersByRow[2].map(this._createSimpleKeyDefinition) ],
      [ this._getSpecialCharacterSetKey(), ...[ '@', ',', '.' ].map(this._createSimpleKeyDefinition) ]
    ];
    return rows;
  }

  private _getAlphabeticCharacterSetKey() {

    const symbol = this.getAlphabeticCharacterSetKeySymbol();
    return new SimpleKeyDefinition(symbol, () => this._setLayout(KeyboardLayout.LOWERCASE));
  }

  private _getShiftKey() {

    return new SimpleKeyDefinition(<ShiftKeyIcon keyboardLayout={this._layout}/>, this._handleShiftKeyPressed);
  }

  private _getSpecialCharacterRows() {

    const [ firstRow, secondRow, thirdRow, fourthRow ] = this.getSpecialCharactersByRow();
    const rows = [
      firstRow.map(this._createSimpleKeyDefinition),
      secondRow.map(this._createSimpleKeyDefinition),
      thirdRow.map(this._createSimpleKeyDefinition),
      [ this._getAlphabeticCharacterSetKey(), ...fourthRow.map(this._createSimpleKeyDefinition) ]
    ];
    return rows;
  }

  private _getSpecialCharacterSetKey() {

    return new SimpleKeyDefinition('#+=', () => this._setLayout(KeyboardLayout.SPECIAL));
  }

  private _handleShiftKeyPressed = () => {

    switch(this._layout) {
      case KeyboardLayout.LOWERCASE:
        this._setLayout(KeyboardLayout.UPPERCASE);
        break;
      case KeyboardLayout.UPPERCASE:
        this._setLayout(KeyboardLayout.CAPS_LOCK);
        break;
      default:
        this._setLayout(KeyboardLayout.LOWERCASE);
    }
  };

  private _handleSimpleKeyPress = (key) => {

    if (this._layout === KeyboardLayout.UPPERCASE) {
      this._setLayout(KeyboardLayout.LOWERCASE);
    }

    sendKeyboardInput(key);
  }

  private _setLayout(layout: KeyboardLayout) {

    this._layout = layout;
    this.emit('layoutChanged', this);
  }
}
