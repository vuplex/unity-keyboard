import React from 'react';
import EventEmitter from 'events';
import SimpleKeyDefinition from '../../../models/SimpleKeyDefinition';
import DanishKeySet from './DanishKeySet';
import EnglishKeySet from './EnglishKeySet';
import FrenchKeySet from './FrenchKeySet';
import GermanKeySet from './GermanKeySet';
import LanguageKeySet from './LanguageKeySet';
import NorwegianKeySet from './NorwegianKeySet';
import RussianKeySet from './RussianKeySet';
import SpanishKeySet from './SpanishKeySet';
import SwedishKeySet from './SwedishKeySet';
import globeIcon from './assets/globe-icon.svg';

export default class MultilingualKeySet extends EventEmitter {

  private _keySetIndex = 0;
  private _keySets: LanguageKeySet[] = [
    new EnglishKeySet(),
    new SpanishKeySet(),
    new FrenchKeySet(),
    new GermanKeySet(),
    new RussianKeySet(),
    new DanishKeySet(),
    new NorwegianKeySet(),
    new SwedishKeySet()
  ]

  constructor() {
    super();
    this._keySets.forEach(keySet => keySet.on('layoutChanged', this._handleLayoutChanged));
  }

  /**
  * @override
  */
  get language() {

    return this._getKeySet().language;
  }

  /**
  * @override
  */
  get layout() {

    return this._getKeySet().layout;
  }

  /**
  * @override
  */
  getRows() {

    const rows = this._getKeySet().getRows();
    // Replace the existing @ key in the bottom row with the globe icon for switching languages.
    rows[3][1] = new SimpleKeyDefinition(this._getSwitchLanguageIcon() , this._handleSwitchLanguageKeyClick);
    return rows;
  }

  setLanguage(languageCode) {

    this._keySetIndex = this._keySets.findIndex(k => k.languageCode === languageCode);
    if (this._keySetIndex === -1) {
      this._keySetIndex = this._keySets.findIndex(k => k.languageCode === 'en');
    }
    this.emit('layoutChanged', this);
  }

  private _getKeySet() {

    return this._keySets[this._keySetIndex];
  }

  private _getSwitchLanguageIcon() {

    return <img style={{ width: '1.2em', height: '1.2em' }} src={globeIcon} alt="globe"/>;
  }

  private _handleLayoutChanged = () => {

    this.emit('layoutChanged', this);
  }

  private _handleSwitchLanguageKeyClick = () => {

    this._keySetIndex = this._keySetIndex >= this._keySets.length - 1 ? 0 : this._keySetIndex + 1;
    this.emit('layoutChanged', this);
  }
}
