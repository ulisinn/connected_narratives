import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const Schedule = () => {
  return (<div id="schedule" className="content">
      <ContentHeader text="schedule"/><br/>
      
      <section className="scheduleDay">
        <header>Sunday, 23 April, 2017</header>
        <header><a href="http://lesalon1861.com/" target="_blank">LE SALON 1861</a><br/>(OPEN TO THE PUBLIC)</header>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">12.30-13.00</div>
          <div className="scheduleTitle">Refreshments and welcome</div>
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">13.00-13.20</div>
          <div className="scheduleTitle">Introductions <br/>
            <span className="scheduleParticipant helveticaBold">(Dr. Melissa Park, Tamar Tembeck, Stefanie Blain-Moraes + Eric Lewis)</span>
          </div>
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">13.20-13:45</div>
          <div className="scheduleTitle">Youth reflections on biomusic</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">13.45-14.45</div>
          <div className="scheduleTitle">Challenges encountered on the path to inclusion <br/>
            <span className="scheduleParticipant helveticaBold">(Moderator: Henderson; Panelists: Maccarone, Lajeunesse, Senechal, TBA)</span>
          </div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">14.45-15.00</div>
          <div className="scheduleTitle">Break</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">15.15-16.00</div>
          <div className="scheduleTitle">Experiences of technology as a barrier or facilitator <br/>
            <span className="scheduleParticipant helveticaBold">(Moderator:Poldma; Panelists: Miyake, Katalifos, Spectrum Productions – 2 participants)</span>
          </div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">16.00-16.15</div>
          <div className="scheduleTitle">Closing Remarks<br/>
            <span className="scheduleParticipant helveticaBold">(Katalifos, Henderson)</span>
          </div>
        </div>
      
      </section>
      
      <section className="scheduleDay">
        <header>Monday, 24 April, 2017</header>
        <header><a href="http://www.montrealsciencecentre.com/" target="_blank">MONTREAL SCIENCE CENTRE</a> & <a
          href="https://www.mbam.qc.ca/en/" target="_blank">MONTREAL MUSEUM OF FINE ARTS</a><br/>(OPEN TO REGISTERED
          PARTICIPANTS ONLY)
        </header>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">8.00-8.45</div>
          <div className="scheduleTitle">Welcome & Tour of Biomusic Installation</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">8.45-9.15</div>
          <div className="scheduleTitle">Biomusic<br/>
            <span className="scheduleParticipant helveticaBold">(BLAIN-MORAES, GROND)</span></div>
        
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">9.30-10.20</div>
          <div className="scheduleTitle">Potentialities Keynotes I:<br/>
            <span className="scheduleTitle">Musical Affordances and the Technologies of Presence</span><br/>
            <span className="scheduleParticipant helveticaBold">(Kirmayer)</span><br/>
            <span className="scheduleTitle">Experiencing Engagement: Embodied, Agentive, Interpersonal, Familial & Community Dimensions</span><br/>
            <span className="scheduleParticipant helveticaBold">(LAWLOR)</span>
          </div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">10.20-10.35</div>
          <div className="scheduleTitle">Q/A</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">10.35-10.55</div>
          <div className="scheduleTitle">Break</div>
        </div>
        
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">10.55-11.45</div>
          <div className="scheduleTitle">Potentialities Keynotes II:<br/>
            <span className="scheduleTitle">TBA</span><br/>
            <span className="scheduleParticipant helveticaBold">(STERNE)</span><br/>
            <span className="scheduleTitle">“I am a Fossil”: Autism, Stigma and the Ethics of Care</span><br/>
            <span className="scheduleParticipant helveticaBold">(MATTINGLY)</span>
          </div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">11.45-noon</div>
          <div className="scheduleTitle">Q/A</div>
        </div>
        
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">noon-14.00</div>
          <div className="scheduleTitle">Migration to MBAM & Lunch</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">14.00-16.00</div>
          <div className="scheduleTitle">Tuning-in & Moving-with others <br/>
            <span className="scheduleParticipant helveticaBold">(30 participants)</span></div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">16.00-16.15</div>
          <div className="scheduleTitle">Break</div>
        </div>
        
        
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">16.15-16.30</div>
          <div className="scheduleTitle">Aesthetic Potentialities<br/>
            <span className="scheduleParticipant helveticaBold">(Lee, Tembeck)</span>
          </div>
        </div>
        
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">16.30-17.00</div>
          <div className="scheduleTitle">Participant Reflections - Q/A</div>
        </div>
        
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">17.00-19:00</div>
          <div className="scheduleTitle">Reception 5-7 (Location TBA)</div>
        </div>
      </section>
      
      <section className="scheduleDay">
        <header>Tuesday, 25 April, 2017</header>
        <header><a href="http://www.cirmmt.org/" target="_blank">CENTRE OF INTERDISCIPLINARY RESEARCH IN MUSIC MEDIA AND
          TECHNOLOGY</a><br/>(OPEN TO REGISTERED PARTICIPANTS
          ONLY)
        </header>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">8.00-8.30</div>
          <div className="scheduleTitle">WELCOME</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">8.30-9.00</div>
          <div className="scheduleTitle">Tuning into youth on the spectrum</div>
          <div className="scheduleParticipant helveticaBold">(Youth presentations)</div>
        
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">9.00-10.00</div>
          <div className="scheduleTitle">Emerging Scholar Reflections</div>
          <div className="scheduleParticipant helveticaBold">(Cascio, Motta, Teachman) & Discussants</div>
        </div>
        
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">10.00-11.00</div>
          <div className="scheduleTitle">Stakeholder roundtables</div>
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">11.15-noon</div>
          <div className="scheduleTitle">Large group discussion & future steps</div>
        </div>
      </section>
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    
    </div>
  );
};

Schedule.propTypes = {
  title: React.PropTypes.string,
};

export default Schedule;
