/**
 * Created by ulrichsinn on 03/22/2017.
 */

import '../styles/main.scss';

import React, {Component} from 'react';

import Slide_1 from '../slideshow/slide_1';
import Slide_2 from '../slideshow/slide_2';
import Slide_3 from '../slideshow/slide_3';
import Slide_4 from '../slideshow/slide_4';
import Slide_5 from '../slideshow/slide_5';

var MobileDetect = require('mobile-detect'),
  md = new MobileDetect(window.navigator.userAgent, 600);

export default class CarouselPanes extends Component {
  constructor() {
    super();
    this.panes = [<Slide_1 key={0}/>, <Slide_2 key={1}/>, <Slide_3 key={2}/>, <Slide_4 key={3}/>, <Slide_5 key={4}/>];
  }
  
  componentDidMount() {
    console.log('CarouselPanes did mount', this.carouselPanes.id, 'md', md.phone());
    this.carouselPanes.addEventListener('animationend', () => this.shuffleCarousel(), false);
    
  }
  
  componentWillUnmount() {
    console.log('CarouselPanes did unmount');
    this.carouselPanes.removeEventListener('animationend', () => this.shuffleCarousel(), false);
    
  }
  
  render() {
    return (
      <ul id="carouselWrapper"
          className="panes"
          ref={(el) => {
            this.carouselPanes = el;
          }}>
        {this.panes}
      </ul>
    );
  }
  
  shuffleCarousel() {
    this.carouselPanes.classList.remove('panes');
    let item = this.panes.splice(0, 1);
    this.panes.push(item[0]);
    this.forceUpdate();
    setTimeout(() => {
      this.carouselPanes.classList.add('panes');
    }, 300);
  }
}
