import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const SocialSpatialInclusion = () => {
  return (
    <div id="social_spacial_inclusion" className="content">
      <ContentHeader text="Creating social-spatial inclusion for autism-inclusive cities"/>
      <ContentHeader text="(April 23rd, 1-4.30 pm)"/>
      <div className="contentBody">Our outreach initiative begins with a public town hall to be held at the Salon 1861,
        an inclusive social innovation space
        located at in Montreal’s Little Burgundy <span className="contentBodyEm">(<a href="http://www.lesalon1861.com"
                                                                                     target="_blank">www.lesalon1861.com</a>)</span>.
        Selected in collaboration with the <span className="contentBodyIt">Giant Steps Foundation</span>, eight citizen
        stakeholders will relate the challenges
        and successes they have faced in creating inclusive spaces. Panelists include parents of children and youth
        diagnosed with autism who hold key positions as employers, education administrators, and universal designers as
        well as representatives of municipal services and cultural institutions. After an introduction Eric Lewis,
        <span className="contentBodyIt"> Director of the Institute for the Public Life of Arts and Ideas</span>, Nick
        Katalifos and Thomas Henderson
        of Giant Steps will give the background to the autism-inclusive cities project. To frame this event for the
        public audience, Keven Lee,
        a professional dancer and doctoral candidate will present on how his work “moving-with” children with autism
        reshaped his own
        sensibilities about where and with whom interventions for social inclusion might be situated. Key invited guests
        include
        a social geographer with a focus on social-spatial exclusion from critical autism studies perspective (Joyce
        Davidson), scholars,
        postdoctoral fellows, graduate and undergraduate students in the humanities (anthropology, museology, education,
        art history,
        communication/media studies) and sciences (engineering, rehabilitation). This town hall event is open to the
        public
        and ample time will be given to engage dialogue around practical concerns pertaining to social inclusion.
      </div>
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
      
      </section>
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    
    </div>);
};

SocialSpatialInclusion.propTypes = {
  title: React.PropTypes.string,
};

export default SocialSpatialInclusion;
