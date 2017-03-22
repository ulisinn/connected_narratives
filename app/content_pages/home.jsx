import '../styles/main.scss';

import React from 'react';
import CarouselPanes from '../slideshow/carousel_panes';
import Slide_4_Mobile from '../slideshow/slide_4_mobile';
import ContentFooter from '../components/content_footer';


var MobileDetect = require('mobile-detect'),
  md = new MobileDetect(window.navigator.userAgent, 600);

const Home = () => {
  return (md.phone()) ? <div>
    <Slide_4_Mobile />
    <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
  </div> : <div id="home" className="contentHome">
    <div className="carousel">
      <CarouselPanes/>
    </div>
    <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
  </div>;
};

export default Home;
