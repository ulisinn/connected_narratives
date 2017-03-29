import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const Schedule = () => {
  return (<div id="schedule" className="content">
      <ContentHeader text="schedule"/><br/>
      
      {/*SUNDAY*/}
      
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
            {/*<span className="scheduleParticipant helveticaBold">(Dr. Melissa Park, Tamar Tembeck, Stefanie Blain-Moraes + Eric Lewis)</span>*/}
          </div>
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">13.20-13:45</div>
          <div className="scheduleTitle">Youth reflections on biomusic</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">13.45-14.45</div>
          <div className="scheduleTitle">
            Experiences of technology as a mediator of inclusion
          </div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">14.45-15.00</div>
          <div className="scheduleTitle">Break</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">15.15-16.00</div>
          <div className="scheduleTitle">Experiences of technology as a barrier or facilitator <br/>
            {/*<span className="scheduleParticipant helveticaBold">(Moderator:Poldma; Panelists: Miyake, Katalifos, Spectrum Productions – 2 participants)</span>*/}
          </div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">16.00-16.15</div>
          <div className="scheduleTitle">Closing Remarks<br/>
            {/*<span className="scheduleParticipant helveticaBold">(Katalifos, Henderson)</span>*/}
          </div>
        </div>
      </section>
      
      {/*MONDAY*/}
      
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
            {/*<span className="scheduleParticipant helveticaBold">(BLAIN-MORAES, GROND)</span>*/}
          </div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">9.15-9.30</div>
          <div className="scheduleTitle">The practical reality of physiological sensors</div>
        </div>
        
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">9.30-10.20</div>
          <div className="scheduleTitle">Potentialities Keynotes I
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
          <div className="scheduleTitle">Potentialities Keynotes II
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
            {/*<span className="scheduleParticipant helveticaBold">(30 participants)</span>*/}
          </div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">16.00-16.15</div>
          <div className="scheduleTitle">Break</div>
        </div>
        
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">16.15-16.30</div>
          <div className="scheduleTitle">Aesthetic Potentialities<br/>
            {/*<span className="scheduleParticipant helveticaBold">(Lee, Tembeck)</span>*/}
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
      
      {/*TUESDAY*/}
      
      <section className="scheduleDay">
        <header>Tuesday, 25 April, 2017</header>
        <header><a href="http://www.cirmmt.org/" target="_blank">CENTRE OF INTERDISCIPLINARY RESEARCH IN MUSIC MEDIA AND
          TECHNOLOGY</a><br/>(OPEN TO REGISTERED PARTICIPANTS
          ONLY)
        </header>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">8.00-8.30</div>
          <div className="scheduleTitle">Coffee/WELCOME</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">8.30-8:45</div>
          <div className="scheduleTitle">Moving-with & Biomusic <br/>
            {/*<span className="scheduleParticipant helveticaBold">(Youth presentations)</span>*/}
          </div>
        
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">8:45-9:45</div>
          <div className="scheduleTitle">Emerging Scholar Reflections <br/>
            {/*<span className="scheduleParticipant helveticaBold">(Cascio, Motta, Teachman) & Discussants</span>*/}
          </div>
        </div>
        
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">9.45-10.15</div>
          <div className="scheduleTitle">Q/A and Feedback</div>
        </div>
        
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">16.00-16.15</div>
          <div className="scheduleTitle">Break</div>
        </div>
        
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">10.30-11.15</div>
          <div className="scheduleTitle">Stakeholder roundtables <br/>
            1. Citizen led design brief<br/>
            2. Universal design potentialities in higher education and employment<br/>
            3. Publications
          </div>
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">11.15-11.45</div>
          <div className="scheduleTitle">Large group discussion: <br/> Interest in partnerships, networks,
            collaboration (grants and practice networks)
          </div>
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">11.45 - noon</div>
          <div className="scheduleTitle">Thank you and Future Steps</div>
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
