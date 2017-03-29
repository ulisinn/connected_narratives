import '../styles/main.scss';

import React from 'react';
import {Link} from 'react-router';

import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const SocialSpatialInclusion = () => {
  return (
    <div id="social_spacial_inclusion" className="content">
      <ContentHeader text="Experiencing facilitators and barriers to inclusion"/>
      <ContentHeader text="(April 23rd)"/>
      <div className="contentBody">Our outreach initiative begins with a public town hall to be held at the <span
        className="contentBodyIt">Salon 1861</span>, an inclusive social innovation space located in Montreal’s
        Little Burgundy <span className="contentBodyEm">(<a href="http://www.lesalon1861.com" target="_blank">www.lesalon1861.com</a>)</span>.
        Selected in collaboration with <span className="contentBodyIt">Giant Steps</span>, panelists will
        include persons on the spectrum as well as parents of children and youth diagnosed with autism who hold key
        positions as employers, administrators, and universal designers in academic, civic and cultural institutions.
        <br/><br/>
        After an introduction and general overview by Drs. Park, Tembeck and Blain-Moraes, there will be two community
        panels:
        <p>{'\u00A0'}</p>
        <div>
          <p><span className="contentBodyEm">Panel I.</span> <span className="contentBodyIt">Challenges encountered on the path towards inclusion</span>
          </p>
          <p>{'\u00A0'}</p>
          
          <p>Moderator:<br/><span className="contentBodyEm">Thomas Henderson</span>, Director General, Giant Steps
            School</p>
          <p>{'\u00A0'}</p>
          
          <p>Panelists:<br/>
            <span className="contentBodyEm">Marilyn Lajeunesse</span>, Educational Programmes Officer -
            Adults and Community Groups, Montreal Museum of Fine Arts<br/><span
              className="contentBodyEm">Louise Giroux</span>, Educational Programmes Officer -
            Well-being and Art Therapy, Montreal Museum of Fine Arts
            <br/>
            <span className="contentBodyEm">Jennifer Maccarone</span>, Chair, Board of Directors, Sir Wilfred Laurier
            School Board
            <br/>
            <span className="contentBodyEm">Christian Senechal</span>, Director, National Centre for Dance Therapy
            <br/>
            <span className="contentBodyEm">Remrov Vormer</span>, Artist
          </p>
        </div>
        <p>{'\u00A0'}</p>
        <p>{'\u00A0'}</p>
        <div>
          <p><span className="contentBodyEm">Panel II.</span> <span className="contentBodyIt">Experiences of technology as a mediator of inclusion</span>
          </p>
          <p>{'\u00A0'}</p>
          
          <p>Moderator:<br/><span className="contentBodyEm">Tiiu Vaikla Poldma</span>, Director, GRID (Groupe de
            Recherche en Lumière et Design), Université de Montréal</p>
          <p>{'\u00A0'}</p>
          
          <p>Panelists:<br/>
            <span className="contentBodyEm">Nick Katalifos</span>, Principal, Roslyn Elementary
            School<br/>
            <span className="contentBodyEm">Natalie  Miyake</span>, Employer-Director, Parent & Board Member-Community,{' '}
            <a href="http://wiaih.qc.ca/" target="_blank">WIAIH</a> & <a href="http://www.summit-school.com/" target="_blank">Summit School</a>
            <br/>
            <span className="contentBodyEm">Aryanna Comodini</span>, Parent
            <br/>
            <span className="contentBodyEm">TBA</span>, Spectrum Productions
          </p>
        </div>
        <p>{'\u00A0'}</p>
        <p>This town hall event is open to the public.</p>
        <p>
          The days' events will also be filmed by <span className="contentBodyEm"><a
          href="http://productionsspectrum.com/en/" target="_blank">Productions Spectrum</a></span> to create public
          service announcements <Link to={'Videos'} className="helveticaBold">{'(Coming soon)'}</Link>.
        </p>
        <div>
          <a href="http://wiaih.qc.ca/" target="_blank">
            <div id="wiaih" className="logo"></div>
          </a>
        </div>
      </div>
      
      
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    </div>);
};

SocialSpatialInclusion.propTypes = {
  title: React.PropTypes.string,
};

export default SocialSpatialInclusion;
