
import React, { Component } from 'react';

class ColorBox extends Component {
  render() {
    const suppliedOpacity = this.props.opacity;
    return (
      <div className="color-box" style={ {opacity: suppliedOpacity} }>
        { (suppliedOpacity >= 0.2) ? (<ColorBox opacity={(suppliedOpacity - 0.1)} />) : null }
      </div>
    );
  }
}

export default ColorBox;

