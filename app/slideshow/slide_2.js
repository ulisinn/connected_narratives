/**
 * Created by ulrichsinn on 03/21/2017.
 */

import '../styles/main.scss';

import React, {Component} from 'react';

const slide_bg_2 = require('../images/slide_bg_2.png');

export  default class Slide_2 extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <li >
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 817 330">
          <image width="817" height="330" href={slide_bg_2}
                 x={0} y={0}>
          </image>
          <g transform="translate(340,118)">
            <rect x="0" y="0" width="345" height="123" stroke="#ffffff" strokeWidth="1" fill="none"/>
            <text className="slide_text_2" fill="#ffffff">
              <tspan x={14} y={30}>Biomusic is an innovative technology</tspan>
              <tspan x={14} y={55}>that translates the physiological</tspan>
              <tspan x={14} y={80}>representations of emotional</tspan>
              <tspan x={14} y={105}>and mental states into musical output</tspan>
            </text>
          </g>
        </svg>
      </li>
    );
  }
}

