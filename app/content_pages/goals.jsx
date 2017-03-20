import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const Goals = () => {
  return (<div id="goals" className="content">
      
      <ContentHeader text="Goals and objectives"/>
      
      <div className="contentBody">The overarching goal of this Connections Grant project is to generate socially
        accountable knowledge in the humanities, social sciences and natural sciences by providing an actual, real-world
        focus—the potentialities of biomusic in the creation of autism-friendly cities. To meet this goal, <span
          className="contentBodyIt">Interfacing
        biomusic and autism</span> has <span className="contentBodyEm">four main objectives</span>:
      </div>
      
      <div className="contentBody">
        First, it aims to cut across traditional divisions between science and art, public and private, non-profit and
        commercial entities by bringing together leaders in educational, cultural, and business organizations—many of
        whom have personal as well as professional stakes in an autism-friendly city— in direct conversation with
        academics pioneering in the fields of universal design, critical phenomenology, critical neuroscience,
        disability and communication/ media studies, engineering and industry representatives of electrophysiological
        monitoring technology.
      </div>
      
      <div className="contentBody">
        Second, it provides a citizen-led, integrated knowledge mobilization across societal sectors and academic
        disciplines to dialogue about the potentialities of biomusic to (1) increase inclusion by increasing awareness
        of neurodiversity, provide biofeedback to autists,1 and/or support intersubjectivity and communication across
        linguistic and physiological divides as well as (2) increase stigma by othering, reaffirming norms, and/or
        focusing attention on individual, in contrast to attitudinal barriers to social exclusion. The knowledge to be
        exchanged in this face-to-face format includes: practical experiences of social inclusion/exclusion of families
        with children and youth on the autism spectrum; biotechnology; and emergent theoretical developments focused on
        everyday ethical life from critical phenomenological, embodied cognitive, and communication/media perspectives.
      </div>
      
      <div className="contentBody">
        Third, <span className="contentBodyIt">Interfacing biomusic and autism</span> offers a number of intersectoral
        and multidisciplinary training and
        mentoring opportunities for students and emerging scholars. In addition to the opportunity to engage 1 Preferred
        by insiders.<br/>
        In the public outreach event and closing reflections, students will also be able to experience biomusic and
        postdoctoral fellows will receive feedback on their presentations from invited academics on the everyday ethics
        as opposed to bioethics related to their fields of inquiry (science and technology studies, cultural
        anthropology, social inclusion and participation). Notably, the initiative—through the applicants and invited
        participants—will include a range of students from universal design, art history, engineering, rehabilitation,
        communication/media studies, and transcultural psychiatry.
      </div>
      
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    </div>
  );
};

Goals.propTypes = {
  title: React.PropTypes.string,
};

export default Goals;
