import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';
const Description = () => {
  return (
    <div id="description" className="content">
      <ContentHeader text="Interfacing Biomusic & Autism"/>
      <div className="contentBody">
    
        <div className="contentBody">"Interfacing Biomusic and Autism: The everyday ethics of representing the physiology
          of what moves us" is an intersectoral, interdisciplinary and international initiative consisting of 4 events
          that will take place from April 23-25, 2017 in community, cultural, and academic venues in Montreal. This
          initiative hosts an unprecedented encounter between a group of citizen stakeholders behind the creation of
          Canada’s first autism-friendly city <span className="contentBodyEm">(<a
            href="http://www.autisminclusivecity.com" target="_blank">www.autisminclusivecity.com</a>)</span>,
          industry representatives who have vested interests in the technological manifestation of physiological states,
          and academic scholars from the humanities (anthropology, art history and communication/media studies), social
          and natural sciences (engineering, rehabilitation).
        </div>
        
        <div className="contentBody">Biomusic is an innovative technology that translates the physiological representations of emotional and
          mental states into musical output. The interface between biomusic and autism blurs the distinctions between
          technologies and humans, art and emotions, public and private experiences. It unsettles common sense
          assumptions of technology as cold, calculating, and/or rational. Instead, biomusic highlights both the
          potentialities and risks of translating the unique physiological signals of particular persons into a living
          cultural form. As such, biomusic could be a mediator to attune to and recognize the presence of persons who
          are marginalized due to diverse communicative capacities while simultaneously raising questions about what
          values would guide the implementation of this innovative technology.</div>
        
        <div className="contentBody">Thus, the interface between biomusic and autism constitutes a
          space to explore how our sense of the beautiful and the good should be woven into our everyday (inter)actions,
          keeping in mind the literary critic Kenneth Burke’s (1941/1973: 234) observation that “aesthetical values are
          intermingled with ethical values and the ethical is the basis of the practical.”</div>
      </div>
      
      <hr/>
      <p className="contentBody footnote">Burke, K. (1941/1973). Literature as equipment for living <span
        className="contentBodyIt">The philosophy of literary form: studies in symbolic action</span> (Third edition ed.,
        pp. 293-304).<br/>Los Angeles: University of California Press.</p>
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    </div>
  );
};

Description.propTypes = {
  title: React.PropTypes.string,
};

export default Description;
