import '../styles/main.scss';

import React from 'react';
import { VideoPlayer } from 'react-video-players';

import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';


const Videos = () => {
  return (<div id="videos" className="contentFull">
    
    <div id="videoHeader">
      <div id="videoTitle">VIDEO & PHOTOS</div>
    </div>
    <div id="videoContent">
      {/*<ContentHeader text="COMING SOON" />*/}
      <VideoPlayer src='http://www.connectednarratives.org/video/FC_credits.mp4'
                   config={{
                     controls: true,
                     poster: 'http://www.connectednarratives.org/video/FC_credits.png',
                   }} />
    </div>
    <ContentFooter text='Interfacing Biomusic & Autism © 2017' />
  
  </div>);
};

export default Videos;
