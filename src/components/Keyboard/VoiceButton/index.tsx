import React, { Component, MouseEventHandler } from 'react';
import micIcon from './assets/mic-icon.svg';
import './styles.scss';

export default class VoiceButton extends Component<{ active: boolean, onMouseDown: MouseEventHandler }> {

  render() {
    return (
      <div className={`voice-button ${this.props.active ? 'voice-button-active' : ''}`} onMouseDown={this.props.onMouseDown}>
        <div className="voice-button-icon">
          <div>
            <img src={micIcon} alt="voice control"/>
          </div>
        </div>
      </div>
    );
  }
}
