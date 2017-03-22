import '../styles/main.scss';

import React from 'react';
import CarouselPanes from '../slideshow/carousel_panes';
const Home = () => {
  return <div id="home" className="contentHome">
    <div className="carousel">
      <CarouselPanes/>
    </div>
  </div>;
};

export default Home;
