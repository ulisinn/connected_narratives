import '../styles/main.scss';

import React from 'react';
import ContentFooter from '../components/content_footer';

const Patrons = () => {
  return (<div id="patrons" className="contentFull">
    <div id="patronsWrapper">
      <div id="patronsHeader">
        <div id="patronsTitle">PATRONS & FUNDERS</div>
      </div>
      <div id="patronsLogos">
        
        <div><a href="http://www.sshrc-crsh.gc.ca/home-accueil-eng.aspx" target="_blank">
          <div id="sshrc" className="sshrc_logo"></div>
        </a></div>
        <a href="http://mcgill.ca" target="_blank">
          <div id="mc_gill" className="logo"></div>
        </a>
        <a href="https://www.mbam.qc.ca/en/education/community-programs/" target="_blank">
          <div id="museum_fine_arts" className="logo"></div>
        </a>
        <a href="http://www.cirmmt.org/" target="_blank">
          <div id="cirmmt" className="logo"></div>
        </a>
        <a href="http://lesalon1861.com/" target="_blank">
          <div id="le_salon" className="logo"></div>
        </a>
        <a href="https://www.empatica.com/" target="_blank">
          <div id="empatica" className="logo"></div>
        </a>
        <a href=" http://iplai.ca/" target="_blank">
          <div id="iplai" className="logo"></div>
        </a>
        <a href="https://www.giantstepsmontreal.com/" target="_blank">
          <div id="giant_steps" className="logo"></div>
        </a>
        <a href="http://productionsspectrum.com/en/" target="_blank">
          <div id="productionsspectrum" className="logo"></div>
        </a>
        <a href="http://www.montrealsciencecentre.com/" target="_blank">
          <div id="montrealsciencecentre" className="logo"></div>
        </a>
        <a href="https://grandsballets.com/en/" target="_blank">
          <div id="grandsballets" className="logo"></div>
        </a>
      </div>
    </div>
    
    <ContentFooter text='Interfacing Biomusic & Autism © 2017'
    />
  
  </div>);
};

Patrons.propTypes = {
  title: React.PropTypes.string,
};

export default Patrons;
