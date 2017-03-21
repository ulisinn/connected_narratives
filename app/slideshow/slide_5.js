/**
 * Created by ulrichsinn on 03/21/2017.
 */

import '../styles/main.scss';

import React, {Component} from 'react';

const slide_bg_5 = require('../images/slide_bg_5.png');

export  default class Slide_5 extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 817 330">
        <image width="817" height="330" href={slide_bg_5}
               x={0} y={0}>
        </image>
        <g transform="translate(320,110)">
{/*          <rect x="0" y="0" width="480" height="105" stroke="#ffffff" strokeWidth="1" fill="none"/>
          <text className="slide_text_2" fill="#ffffff">
            <tspan x={20} y={30}>Interfacing Biomusic & Autism blurs distinctions</tspan>
            <tspan x={20} y={55}>between humans and technologies, emotions and art,</tspan>
            <tspan x={20} y={80}>public and private experiences.</tspan>
          </text>*/}
        </g>
      </svg>
    );
  }
}


