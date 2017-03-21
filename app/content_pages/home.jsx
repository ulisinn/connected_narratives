import '../styles/main.scss';

import React from 'react';
import Slide_1 from '../slideshow/slide_1';
import Slide_2 from '../slideshow/slide_2';
import Slide_3 from '../slideshow/slide_3';
import Slide_4 from '../slideshow/slide_4';
import Slide_5 from '../slideshow/slide_5';
const Home = () => {
  return <div id="home" className="contentHome">
    <Slide_5 />
    <Slide_4 />
    <Slide_3 />
    <Slide_2 />
    <Slide_1 />
  </div>;
};

export default Home;
