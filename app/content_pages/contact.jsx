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
            <p >Dr. Melissa Park</p>
            <p className="contactEmail"><span className="contentBodyEm">melissa.park</span>[at]<span
              className="contentBodyEm">mc
              gill</span>[.]<span className="contentBodyEm">ca</span></p>
          </div>
          <div className="contactAddress">
            <p>Stefanie Blain-Moraes</p>
            <p className="contactEmail">
              <span className="contentBodyEm">stefanie.blain-moraes</span>[at]<span className="contentBodyEm">mc
              gill</span>[.]<span className="contentBodyEm">ca</span>
              <p>
                <a href="http://www.moraeslab.com/biapt/" target="_blank">www.moraeslab.com/biapt/</a>
              </p>              <p>
              <a href="http://www.moraeslab.com/biapt/research/mes-emotions-sont-fleur-de-peau/" target="_blank">Mes émotions sont à fleur de peau</a>
            </p>
            </p>
          </div>
          <div className="contactAddress">
            <p>Tamar Tembeck</p>
            <p className="contactEmail">
              <span className="contentBodyEm">tamar.tembeck</span>[at]<span className="contentBodyEm">mc
              gill</span>[.]<span className="contentBodyEm">ca</span>
              <p>
                <a href="http://media.mcgill.ca/en/content/tembeck-tamar" target="_blank">media.mcgill.ca/en/content/tembeck-tamar</a>
              </p>
            </p>
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
