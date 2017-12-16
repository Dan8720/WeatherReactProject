import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.less';

import keenImage from '../assets/keen.png'; // Importing image -> ADDED IN THIS STEP

export default class Hello extends Component {
  render() {
    return (
      <div>
        Hello from react

        {/* ADDED IN THIS STEP */}
        <img src={keenImage} alt="Commander Keen" />
      </div>
    );
  }
}

render(<Hello />, document.getElementById('app'));
