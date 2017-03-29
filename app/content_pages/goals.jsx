import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const Goals = () => {
  return (<div id="goals" className="content">
      
      <ContentHeader text="Goals and objectives"/>
      
      <div className="contentBody">
        The overarching goal of this project is to generate socially accountable knowledge in the humanities, social
        sciences and natural sciences by providing an actual, real-world focus. To meet this goal, <span
        className="contentBodyIt">Interfacing Biomusic and Autism </span>
        has <span className="contentBodyEm">three main objectives:</span>
      </div>
      
      <div className="contentBody">
        First, it aims to cut across traditional divisions between science and art, public and private, non-profit and
        commercial entities by bringing together leaders in educational, cultural, and business organizations in direct
        conversation with academics pioneering in the fields of universal design, critical phenomenology, critical
        neuroscience, disability and communication/ media studies, engineering and industry representatives of
        electrophysiological monitoring technology.
      </div>
      
      <div className="contentBody">
        Second, it provides a citizen-led, integrated knowledge mobilization across societal sectors and academic
        disciplines to dialogue about (a) the potentialities of biomusic to increase inclusion by increasing awareness
        of neurodiversity, provide biofeedback to autists<sup>[1]</sup>, and/or support intersubjectivity and
        communication across linguistic and physiological divides as well as (b) the inherent risks of increasing
        exclusion by othering, reaffirming norms, and/or stigmatizing individuals rather than looking at attitudinal
        barriers in society.
      </div>
      
      <div className="contentBody">
        Third, <span className="contentBodyIt">Interfacing Biomusic and Autism</span> offers a number of intersectoral
        and multidisciplinary opportunities to bring students and emerging scholars (from universal design, art history,
        engineering, rehabilitation, communication/media studies, and transcultural psychiatry) into conversation with
        the wider public to respond together to the practical realities of enacting social-spatial inclusion within
        neurodiverse communities.
      </div>
      
      <hr width={300} style={{
        maxWidth: 200, margin: 0, marginBottom: '0.5em',
      }}/>
      <p className="contentBody footnote"><sup>[1]</sup> Term preferred by insiders.</p>
      <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
    </div>
  );
};

Goals.propTypes = {
  title: React.PropTypes.string,
};

export default Goals;
