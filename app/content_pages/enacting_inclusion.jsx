import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const EnactingInclusion = () => {
  return (<div id="enacting_inclusion" className="content">
      <ContentHeader text="Enacting inclusion"/>
      <ContentHeader text="(April 25th)"/>
      
      <div className="contentBody">Our initiative for social inclusion will close with a panel discussion at the <span
        className="contentBodyEm contentBodyIt">Centre for Interdisciplinary Research
        in Music and Media Technology (<a href="http://www.cirmmt.org" target="_blank">www.cirmmt.org</a>)</span>, a
        multi-disciplinary and inter- institutional2 research group
        housed at the Schulich School of Music, McGill University. Interfacing biomusic and autism aligns with the
        Center’s mission
        to promote an interdisciplinary culture and form partnerships with the public and para-public sectors in Quebec,
        Canada and internationally.
        This setting creates space to synthesize the implications and outcomes of the past two days and propose future
        directions, with a particular
        emphasis on training and mentoring for accountable research. First, postdoctoral fellows who are connected to
        rehabilitation research
        centers will reflect on how this citizen- led initiative has impacted their thinking, using their current foci
        in areas ranging from technology
        and social inclusion to autism. The keynote speakers for the potentiality panel will provide commentary,
        followed by an open question
        and answer period, which is free and open to the public. We then will split into cross sector break-out groups,
        organized according
        to the themes that emerged over the past two days. Break-out groups will prioritize the everyday ethical,
        aesthetic and practical aspects
        related to their theme (e.g. citizen-led design brief for biomusic and/or environmental user design in higher
        education, workplaces),
        future steps, and re-convene to share discussions and confirm future partnerships.
      </div>
    
      <ContentHeader text="Emerging scholars reFLections:"/>
    
      <section className="scheduleDay">
        <div className="localPanelists">
          <div className="panelistName"><span className="helveticaBold">• Rossio Ochoa-Motta</span> <p>(Science Technology
            Studies)</p>
          </div>
          <div className="panelistOrg helvetica contentBodyIt">Attuning to Disability through Biomusic:<br/>What are the
            New Ethical (Translational) Challenges? Communication, Invasion, Recreation?
          </div>
        </div>
      
        <div className="localPanelists">
          <div className="panelistName"><span className="helveticaBold">• Ariel Cascio</span> <p>(Cultural
            Anthropology)</p>
          </div>
          <div className="panelistOrg helvetica contentBodyIt">Reflections on Biomusic from an Anthropology of Autism
            Perspective
          </div>
        </div>
      
        <div className="localPanelists">
          <div className="panelistName"><span className="helveticaBold">• Gail Teachman</span>
            <p>(Rehabilitation)</p>
          </div>
          <div className="panelistOrg helvetica contentBodyIt">(Re)Locating Voice: Dialogical connections, communication
            and autism
          </div>
        </div>
    
      </section>
      
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    </div>
  );
};

EnactingInclusion.propTypes = {
  title: React.PropTypes.string,
};

export default EnactingInclusion;
