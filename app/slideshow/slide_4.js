/**
 * Created by ulrichsinn on 03/21/2017.
 */

import '../styles/main.scss';

import React, {Component} from 'react';

const slide_bg_4 = require('../images/slide_bg_4.png');

export  default class Slide_4_Mobile extends Component {
  constructor() {
    super();
  }
  
  render() {
    return (
      <li>
        <svg version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 817 330">
          <image width="817" height="330" xlinkHref={slide_bg_4}
                 x={50} y={0}>
          </image>
          <g transform="translate(20,63)">
            <text fill="#ffffff">
              <tspan className="slide_text_4a" x={0} y={30}>INTERNATIONAL INITIATIVE</tspan>
              <tspan className="slide_text_4a" x={0} y={65}>CONSISTING OF</tspan>
              <tspan className="slide_text_4b" y={65}> 4 EVENTS</tspan>
              <tspan className="slide_text_4b" x={0} y={100}>FROM APRIL 23-25, 2017</tspan>
              <tspan className="slide_text_4a" x={0} y={135}>IN COMMUNITY, CULTURAL,</tspan>
              <tspan className="slide_text_4a" x={0} y={170}>AND ACADEMIC VENUES</tspan>
              <tspan className="slide_text_4a" x={0} y={205}>IN MONTREAL.</tspan>
            </text>
          </g>
        </svg>
      </li>
    );
  }
}


