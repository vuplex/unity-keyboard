import React, { Component } from 'react';
import Key from '../Key';
import KeyDefinition from '../../../models/KeyDefinition';
import SimpleKeyDefinition from '../../../models/SimpleKeyDefinition';
import sendKeyboardInput from '../../../utils/sendKeyboardInput';
import './styles.scss';

export default class CenterBoard extends Component<{ rows: KeyDefinition[][], spacebarText: string }> {

  private _spacebarKeyDefinition = new SimpleKeyDefinition(' ', sendKeyboardInput);

  render() {
    return (
      <div className="center-board">
        <div className="key-area">
          <div className="key-row">
            {this.props.rows[0].map(this._renderKey)}
          </div>
          <div className="key-row">
            <div className="key-offset-margin"/>
            {this.props.rows[1].map(this._renderKey)}
            <div className="key-offset-margin"/>
          </div>
          <div className="key-row">
            {this.props.rows[2].map(this._renderKey)}
          </div>
          <div className="key-row">
            {this.props.rows[3].slice(0, 2).map(this._renderKey)}
            <div className="spacebar-container">
              <Key className="spacebar" definition={this._spacebarKeyDefinition}>
                {this.props.spacebarText}
              </Key>
            </div>
            {this.props.rows[3].slice(2).map(this._renderKey)}
          </div>
        </div>
      </div>
    );
  }

  _renderKey = (key) => {

    return <Key className="key" definition={key} key={key.value}/>;
  }
}
