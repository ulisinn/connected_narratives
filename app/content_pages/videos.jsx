import '../styles/main.scss';

import React from 'react';

import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const Videos = () => {
  return (<div id="videos" className="content">
    <ContentHeader text="Videos"/>
    <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
  
  </div>);
};

export default Videos;
