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
      <li>
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 817 330">
          <image width="817" height="330" xlinkHref={slide_bg_5}
                 x={-20} y={0}>
          </image>
          <g transform="translate(405,40)">
            <text fill="#ffffff">
              <tspan className="slide_text_5a" x={0} y={30}>SUNDAY, 23 APRIL, 2017</tspan>
              <tspan className="slide_text_5b" x={0} y={55}>LE SALON 1861</tspan>
              <tspan className="slide_text_5a" x={0} y={110}>MONDAY, 24 APRIL, 2017</tspan>
              <tspan className="slide_text_5b" x={0} y={135}>MONTREAL SCIENCE CENTRE &</tspan>
              <tspan className="slide_text_5b" x={0} y={155}>MONTREAL MUSEUM OF FINE ARTS</tspan>
              <tspan className="slide_text_5a" x={0} y={215}>TUESDAY, 25 APRIL, 2017</tspan>
              <tspan className="slide_text_5b" x={0} y={240}>CENTRE FOR INTERDISCIPLARY</tspan>
              <tspan className="slide_text_5b" x={0} y={260}>RESEARCH IN MUSIC MEDIA</tspan>
              <tspan className="slide_text_5b" x={0} y={280}>AND TECHNOLOGY (CIRMMT)</tspan>
            </text>
          </g>
        </svg>
      </li>
    );
  }
}


