import '../styles/main.scss';

import React from 'react';
import ContentFooter from '../components/content_footer';

const Contact = () => {
  return (
    <div id="contact" className="contentFull">
      <div id="contactWrapper">
        <div id="contactHeader">
          <div id="contactTitle">CONTACT</div>
        </div>
        
        <div id="contactAddresses">
          <div className="contactAddress">
            <p>Dr. Melissa Park</p>
            <p>addres[at]someurl.com</p>
          </div>
          <div className="contactAddress">
            <p>Dr. Melissa Park</p>
            <p>addres[at]someurl.com</p>
          </div>
          <div className="contactAddress">
            <p>Dr. Melissa Park</p>
            <p>addres[at]someurl.com</p>
          </div>
        </div>
      </div>
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    </div>);
};

Contact.propTypes = {
  title: React.PropTypes.string,
};

export default Contact;
