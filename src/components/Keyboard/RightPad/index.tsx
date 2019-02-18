import React, { Component } from 'react';
import Key from '../Key';
import SimpleKeyDefinition from '../../../models/SimpleKeyDefinition';
import sendKeyboardInput from '../../../utils/sendKeyboardInput';
import './styles.scss';

export default class RightPad extends Component {

  private _upKeyDefinition = new SimpleKeyDefinition('ArrowUp', sendKeyboardInput);
  private _leftKeyDefinition = new SimpleKeyDefinition('ArrowLeft', sendKeyboardInput);
  private _rightKeyDefinition = new SimpleKeyDefinition('ArrowRight', sendKeyboardInput);
  private _downKeyDefinition = new SimpleKeyDefinition('ArrowDown', sendKeyboardInput);

  render() {
    return (
      <div className="right-pad">
        <div className="key-area">
          <div className="right-key-area">
            <div className="arrow-pad">
              <div className="arrow-pad-row">
                <Key definition={this._upKeyDefinition}>
                  ▲
                </Key>
              </div>
              <div className="arrow-pad-row arrow-pad-middle">
                <Key definition={this._leftKeyDefinition}>
                  <span style={{ transform: `rotate(-90deg)` }}>▲</span>
                </Key>
                <Key definition={this._rightKeyDefinition}>
                  <span style={{ transform: `rotate(90deg)` }}>▲</span>
                </Key>
              </div>
              <div className="arrow-pad-row">
                <Key definition={this._downKeyDefinition}>
                  <span style={{ transform: `rotate(180deg)` }}>▲</span>
                </Key>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
