import { ReactElement } from 'react';
import KeyDefinition from './KeyDefinition';

export default class SimpleKeyDefinition implements KeyDefinition {

  constructor(public value: string|ReactElement, private _clickHandler: (SimpleKeyDefinition) => void) {}

  onClick = () => {

    if (this._clickHandler) {
      this._clickHandler(this);
    }
  }
}
