import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const SocialSpatialInclusion = () => {
  return (
    <div id="social_spacial_inclusion" className="content">
      <ContentHeader text="Creating social-spatial inclusion for autism-inclusive cities"/>
      <ContentHeader text="(April 23rd, 1:00 - 16:30)"/>
      <div className="contentBody">Our outreach initiative begins with a public town hall to be held at the <span
        className="contentBodyIt">Salon 1861</span>,
        an inclusive social innovation space
        located at in Montreal’s Little Burgundy <span className="contentBodyEm">(<a href="http://www.lesalon1861.com"
                                                                                     target="_blank">www.lesalon1861.com</a>)</span>.
        Selected in collaboration with the <span className="contentBodyIt">Giant Steps Foundation</span>, panelists will
        include persons on the spectrum as well as parents of children and youth diagnosed with autism who hold key
        positions as employers, administrators, and universal designers in academic, civic and cultural institutions.
        <br/>After an introduction by Eric Lewis, <span className="contentBodyIt"> Director of the Institute for the Public Life of Arts and Ideas (IPLAI)</span>,
        there will be two community panels:
        <p>{'\u00A0'}</p>
        <p>
          <pre>  I.   Resources and challenges on paths towards inclusion; and</pre>
          <p>{'\u00A0'}</p>
          <pre>  II.  Experiences of technology as a barrier to or facilitator to inclusion.</pre>
          <p>{'\u00A0'}</p>
          This town hall event is open to the public.
        </p>
        <p>{'\u00A0'}</p>
  
        <p>
          The days' events will also be filmed by <span className="contentBodyEm"><a href="http://productionsspectrum.com/en/" target="_blank">Productions Spectrum</a></span> to create public service announcements to be
          distributed via the links and networks of invited participants.
        </p>
      </div>
      {/*
       <ContentHeader text="Local panelists (including parents of children/youth on the spectrum)"/>
       
       <section className="scheduleDay">
       <div className="localPanelists">
       <div className="panelistName helveticaBold">• Natalie Miyake</div>
       <div className="panelistOrg helvetica contentBodyIt">WIAIH & Summit SchooL BOARD</div>
       </div>
       
       <div className="localPanelists">
       <div className="panelistName helveticaBold">• Pam Drekopoulos</div>
       <div className="panelistOrg helvetica contentBodyIt">Specialisterne</div>
       </div>
       
       <div className="localPanelists">
       <div className="panelistName helveticaBold">• Jennifer Maccarone</div>
       <div className="panelistOrg helvetica contentBodyIt">Sir Wilfrid Laurier
       <br/>School Board,Quebec
       <br/>English School
       Boards
       </div>
       </div>
       
       <div className="localPanelists">
       <div className="panelistName helveticaBold">• Marilyn LaJeunesse</div>
       <div className="panelistOrg helvetica contentBodyIt">Montreal Museum of Fine Arts</div>
       </div>
       
       <div className="localPanelists">
       <div className="panelistName helveticaBold">• Maliva Klag</div>
       <div className="panelistOrg helvetica contentBodyIt">See Things My Way Center for Innovation</div>
       </div>
       
       <div className="localPanelists">
       <div className="panelistName helveticaBold">• Christian Senechal</div>
       <div className="panelistOrg helvetica contentBodyIt">Les Grands Ballets</div>
       </div>
       
       <div className="localPanelists">
       <div className="panelistName helveticaBold">• Tiiu Polda</div>
       <div className="panelistOrg helvetica contentBodyIt">Environmental Design, University of Montreal</div>
       </div>
       
       <div className="localPanelists">
       <div className="panelistName helveticaBold">• David de Cotis</div>
       <div className="panelistOrg helvetica contentBodyIt">Ville de Laval (STM/Transportation)</div>
       </div>
       
       </section>*/}
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    
    </div>);
};

SocialSpatialInclusion.propTypes = {
  title: React.PropTypes.string,
};

export default SocialSpatialInclusion;
