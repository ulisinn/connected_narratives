import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const BiomusicPotentialities = () => {
  return (
    <div id="biomusic_potentialities" className="content">
      <ContentHeader text="ReFLecting on the Potentialities of Biomusic"/>
      <ContentHeader text="(April 24th, 8.30 am – noon)"/>
      <div className="contentBody">We will begin our theoretical exploration of biomusic technology at the <span
        className="helveticaBold">Montreal Science Center</span>, which hosts
        a permanent exhibition featuring biomusic, “Mes émotions sont à fleur de peau” (opening February 2017).
        Co-applicant Stefanie Blain-Moraes will present a history and technical background of biomusic to situate the
        group
        to the realities, possibilities and limitations of this technology. Daniel Bender, an industry representative
        from Empatica
        will then introduce issues related to commercializing technology for physiological monitoring. Engineering
        students under
        Dr. Blain-Moraes will guide participants through the biomusic exhibit, which gives a first-hand experience of
        the technology.
        The group will then re-convene to hear a series of keynote presentations given by leading scholars in their
        respective fields
        on the potentialities as well as everyday ethical implications at the interface of autism and biotechnology.
        A question and answer period will lead into time for continued discussion during an extended lunch.
      </div>
      <ContentHeader text="Potentialities & Everyday Ethics Keynote Speakers:"/>
      
      <section className="scheduleDay">
        <div className="localPanelists">
          <div className="panelistName"><span className="helveticaBold">• Jonathan Sternebr</span> <p>(Media
            Studies)</p>
            <p> McGill University, CA</p>
          </div>
          <div className="panelistOrg helvetica contentBodyIt">Bodies, Perception, Power</div>
        </div>
        
        <div className="localPanelists">
          <div className="panelistName"><span className="helveticaBold">• Mary Lawlor</span> <p>(Occupational
            Science)</p><p>
            USC, US</p></div>
          <div className="panelistOrg helvetica contentBodyIt">Experiencing Engagement: Embodied, Agentive,
            Interpersonal, Familial & Community Dimensions
          </div>
        </div>
        
        <div className="localPanelists">
          <div className="panelistName"><span className="helveticaBold">• Laurence Kirmayer</span>
            <p>((Transcultural Psychiatry)</p>
            <p> McGill University, CA</p>
          </div>
          <div className="panelistOrg helvetica contentBodyIt">Interpersonal, Familial & Community Dimensions
          </div>
        </div>
        <div className="localPanelists">
          <div className="panelistName"><span className="helveticaBold">• Cheryl Mattingly</span>
            <p>((Anthropology)</p>
            <p>Aarhus University, DK</p>
          </div>
          <div className="panelistOrg helvetica contentBodyIt">
            “I am a Fossil”: Autism, Stigma and the Ethics of Care
          </div>
        </div>
      
      
      </section>
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    </div>
  );
};

BiomusicPotentialities.propTypes = {
  title: React.PropTypes.string,
};

export default BiomusicPotentialities;
