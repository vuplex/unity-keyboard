import React, { Component } from 'react';
import Key from '../Key';
import SimpleKeyDefinition from '../../../models/SimpleKeyDefinition';
import sendKeyboardInput from '../../../utils/sendKeyboardInput';
import './styles.scss';

export default class NumPad extends Component {

  private _keyRows = [
    [
      new SimpleKeyDefinition('1', sendKeyboardInput),
      new SimpleKeyDefinition('2', sendKeyboardInput),
      new SimpleKeyDefinition('3', sendKeyboardInput),
    ],
    [
      new SimpleKeyDefinition('4', sendKeyboardInput),
      new SimpleKeyDefinition('5', sendKeyboardInput),
      new SimpleKeyDefinition('6', sendKeyboardInput),
    ],
    [
      new SimpleKeyDefinition('7', sendKeyboardInput),
      new SimpleKeyDefinition('8', sendKeyboardInput),
      new SimpleKeyDefinition('9', sendKeyboardInput),
    ],
    [
      new SimpleKeyDefinition('.', sendKeyboardInput),
      new SimpleKeyDefinition('0', sendKeyboardInput),
      new SimpleKeyDefinition('-', sendKeyboardInput),
    ]
  ];

  render() {
    return (
      <div className="num-pad">
        <div className="key-area">
          {this._keyRows.map(this._renderKeyRow)}
        </div>
      </div>
    );
  }

  _renderKeyRow = (row, index) => {
    return (
      <div className="key-row" key={index}>
        {row.map(keyDefinition => <Key className="key" definition={keyDefinition} key={keyDefinition.value}/>)}
      </div>
    );
  }
}
