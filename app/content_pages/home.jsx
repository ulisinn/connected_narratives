import '../styles/main.scss';

import React from 'react';
import CarouselPanes from '../slideshow/carousel_panes';
import ContentFooter from '../components/content_footer';

const Home = () => {
  return <div id="home" className="contentHome">
    <div className="carousel">
      <CarouselPanes/>
    </div>
    <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
  </div>;
};

export default Home;
