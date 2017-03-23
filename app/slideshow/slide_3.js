/**
 * Created by ulrichsinn on 03/21/2017.
 */

import '../styles/main.scss';

import React, {Component} from 'react';

const slide_bg_3 = require('../images/slide_bg_3.png');

export  default class Slide_3 extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <li>
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 817 330">
          <image width="817" height="345" xlinkHref={slide_bg_3}
                 x={0} y={-20}>
          </image>
          <g transform="translate(320,110)">
            <rect x="0" y="0" width="360" height="124" stroke="#ffffff" strokeWidth="1" fill="none"/>
            <text className="slide_text_2" fill="#ffffff">
              <tspan x={20} y={30}>Interfacing Biomusic & Autism blurs</tspan>
              <tspan x={20} y={55}>distinctions between technologies and </tspan>
              <tspan x={20} y={80}>humans, art and emotions, public and</tspan>
              <tspan x={20} y={105}>private experiences.</tspan>
            </text>
          </g>
        </svg>
      </li>
    );
  }
}


