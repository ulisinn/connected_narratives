import '../styles/main.scss';

import React from 'react';
import Slide_1 from '../slideshow/slide_1';
import Slide_2 from '../slideshow/slide_2';
import Slide_3 from '../slideshow/slide_3';
const Home = () => {
  return <div id="home" className="contentHome">
    <Slide_3 />
    <Slide_2 />
    <Slide_1 />
  </div>;
};

export default Home;
