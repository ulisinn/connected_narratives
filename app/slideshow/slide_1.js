/**
 * Created by ulrichsinn on 03/21/2017.
 */

import '../styles/main.scss';

import React, {Component} from 'react';

const slide_bg_1 = require('../images/slide_bg_1.jpg');

export  default class Slide_1 extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <li>
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 817 330">
          <image width="604" height="330" xlinkHref={slide_bg_1}
                 x={-150} y={0}>
          </image>
          <rect x="423" y="118" width="390" height="71" stroke="#e66722" strokeWidth="1" fill="none"/>
          <text className="slide_text_1" fill="#e66722" x={457} y={174}>INTERFACING BIOMUSIC &amp; AUTISM</text>
        </svg>
      </li>
    );
  }
}

