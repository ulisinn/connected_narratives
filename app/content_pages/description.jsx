import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';
const Description = () => {
  return (<div id="description" className="contentWrapper">
      <div className="content">
        <ContentHeader text="Description SSHRC Connection Project:"/>
        <ContentHeader text="Interfacing Biomusic & Autism"/>
        
        <div className="contentBody">Interfacing Biomusic and Autism: The everyday ethics of representing the physiology
          of what moves us is an intersectoral,
          interdisciplinary and international initiative consisting of 4 events that will take place from April 23-25,
          2017 in community,
          cultural, and academic venues in Montreal. This initiative hosts an unprecedented encounter between a group of
          citizen
          stakeholders who are joining forces to create Canada’s first autism-friendly city <span
            className="contentBodyEm">(<a href="http://www.autisminclusivecity.com" target="_blank">www.autisminclusivecity.com</a>)</span>,
          industry representatives who have vested interests in the technological manifestation of physiological states,
          and academic
          scholars from the humanities (anthropology, art history and communication/media studies), social and natural
          sciences
          (engineering, rehabilitation).
        </div>
        
        <div className="contentBody">Biomusic is an innovative technology that translates the physiological
          representations of emotional and mental states into musical output. The interface autism and biomusic blurs
          the
          distinctions between human and technology, emotion and art, public and private. It unsettles common sense
          assumptions that portray technology as “cold” and associated to a calculating rationality; instead, it
          highlights the potential of translating physiological signals into music to humanize how we, as a society,
          attune to and recognize the presence of persons who are marginalized due to diverse communicative
          capacities.<br/>
          Thus, it also constitutes a privileged space to explore the everyday ethics of representing the physiology of
          what moves us; that is, the physiological signals as well as aesthetical values inspiring action—best
          encapsulated by literary critic Kenneth Burke’s (1941/1973: 234) observation that, “aesthetical values are
          intermingled with ethical values and the ethical is the basis of the
          practical.”
        
        </div>
        <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
      </div>
    </div>
  );
};

Description.propTypes = {
  title: React.PropTypes.string,
};

export default Description;
