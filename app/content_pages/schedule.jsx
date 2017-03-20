import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const Schedule = () => {
  return (<div id="schedule" className="content">
      <ContentHeader text="Preliminary Interfacing biomusic and autism schedule "/><br/>
      <div>We’ve scheduled a 30-minute lead time each day for welcome and refreshments
        to give people time to settle. Fifteen minute breaks are interspersed throughout.
      </div>
      <br/>
      <section className="scheduleDay">
        <header>Sunday, 23 April, 2017</header>
        <header>Salon 1861</header>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">13.00-13.20</div>
          <div className="scheduleTitle">Autism Friendly Cities</div>
          <div className="scheduleParticipant helveticaBold">(Katalifos, Henderson)</div>
        
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">13.20-13:30</div>
          <div className="scheduleTitle">Social-spatial inclusion: What’s gaze got to do with it?</div>
          <div className="scheduleParticipant helveticaBold">(Lee, Park)</div>
        </div>
        
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">13.30-15.15</div>
          <div className="scheduleTitle">What’s at stake?</div>
          <div className="scheduleParticipant helveticaBold">(Community Panels)</div>
        
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">15.15-16.00</div>
          <div className="scheduleTitle">Public Open Forum & Closing Remarks</div>
        </div>
      </section>
      
      <section className="scheduleDay">
        <header>Monday, 24 April, 2017</header>
        <header>Science Center & Museum of Fine Arts</header>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">8.30-9.45</div>
          <div className="scheduleTitle">Biomusic, Physiological sensors & exhibit tour</div>
          <div className="scheduleParticipant helveticaBold">(Blain-Moraes, Bender)</div>
        
        </div>
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">9.45-noon</div>
          <div className="scheduleTitle">Potentialities Keynotes</div>
          <div className="scheduleParticipant helveticaBold">(Sterne, Lawlor, Kirmayer, Mattingly)</div>
        </div>
        
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">12.30-14.00</div>
          <div className="scheduleTitle">Lunch</div>
        </div>
        
        <div className="scheduleEvent">
          <div className="scheduleTime helveticaBold">14.00-16.00</div>
          <div className="scheduleTitle">Tuning-in & Moving-with others</div>
          <div className="scheduleParticipant helveticaBold">(30 participants) </div>
        </div>
  
        <div className="scheduleEvent ">
          <div className="scheduleTime helveticaBold">16.00-17.00</div>
          <div className="scheduleTitle">Participant Reflections - Dinner</div>
        </div>
      </section>
      
      <section className="scheduleDay">
        <header>Tuesday, 25 April, 2017</header>
        <header>CIRMMT</header>
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
      <ContentFooter text='Interfacing Biomusic & Autism © 2017' />
  
    </div>
  );
};

Schedule.propTypes = {
  title: React.PropTypes.string,
};

export default Schedule;
