import React, { Component } from 'react';
import KeyboardLayout from '../KeyboardLayout';
import './styles.scss';

export default class ShiftKeyIcon extends Component<{ keyboardLayout: KeyboardLayout }> {

  render() {

    const colored = [ KeyboardLayout.UPPERCASE, KeyboardLayout.CAPS_LOCK ].includes(this.props.keyboardLayout);

    return (
      <div className="shift-key-icon">
        <div className={`shift-arrow-triangle ${colored ? 'shift-arrow-colored' : ''}`}/>
        {this._renderArrowLine(colored)}
      </div>
    );
  }

  _renderArrowLine(colored) {
    if (this.props.keyboardLayout === KeyboardLayout.CAPS_LOCK) {
      return (
        <div className="caps-lock-arrow-line">
          <div className="caps-lock-line-top"/>
          <div className="caps-lock-line-middle"/>
          <div className="caps-lock-line-bottom"/>
        </div>
      );
    }
    return <div className={`regular-arrow-line ${colored ? 'shift-arrow-colored' : ''}`}/>;
  }
}
