import '../styles/main.scss';

import React from 'react';

import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const Videos = () => {
  return (<div id="videos" className="contentFull">
    
    <div id="videoHeader">
      <div id="videoTitle">VIDEO & PHOTOS</div>
    </div>
    <div id="videoContent">
      <ContentHeader text="COMING SOON"/>
        </div>
    <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
  
  </div>);
};

export default Videos;
