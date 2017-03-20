import '../styles/main.scss';

import React from 'react';
import ContentFooter from '../components/content_footer';

const Contact = () => {
  return (
    <div id="contact" className="contentFull">
      <div id="patronsWrapper">
        <div id="patronsHeader">
          <div id="contactTitle">CONTACT</div>
        </div>
        <div id="patronsLogos">
          <a href="http://mcgill.ca" target="_blank"><div id="mc_gill" className="logo"></div></a>
          <a href="https://www.mbam.qc.ca/en/" target="_blank"><div id="museum_fine_arts" className="logo"></div></a>
          <a href="http://www.cirmmt.org/" target="_blank"><div id="cirmmt" className="logo"></div></a>
          <a href="http://lesalon1861.com/" target="_blank"><div id="le_salon" className="logo"></div></a>
        </div>
      </div>
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    </div>);
};

Contact.propTypes = {
  title: React.PropTypes.string,
};

export default Contact;
