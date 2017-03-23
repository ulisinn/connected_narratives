import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const BiomusicAesthetics = () => {
  return (<div id="biomusic_aesthetics" className="content">
    <ContentHeader text="Experiencing the aesthetics of Biomusic "/>
    <ContentHeader text="(April 24th, 14:00 - 17:00)"/>
    <div className="contentBody">We will host an engaged experience of biomusic at a workshop in the exhibits and
      Studios Art & Education
      Michel de la Chenelière International Atelier of the <span className="helveticaBold contentBodyIt">Musée des Beaux Arts de Montréal </span>
      <span className="contentBodyEm"><a href="http://www.mbam.qc.ca/education/studio-art-education-michel-de-la-cheneliere" target="_blank">(www.mbam.qc.ca/education/studio-art-education-michel-de-la-cheneliere)</a></span>,
      our cultural collaborator on the project.
      This event grounds technical and theoretical knowledge exchange in a common, embodied experience.
      Thirty participants (10 groups of 3), deliberately grouped to represent intersectoral stakes (e.g.
      citizen/academic/student,
      citizen/industry/student) will experience biomusic. Each group will be given a physiological sensor paired with a
      smartphone which
      will play their biomusic over headphones and will follow pre-determined paths through the exhibit halls, created
      to elicit diverse
      emotional responses. Using a simple program designed by engineering students (ECSE 456) under Blain-Moraes,
      the physiological sounds of specific individual will be available for participants to “tune in” to on the
      smartphone.
      After a 90-minute period to explore the exhibits, participants will be able observe or join in an improvisatory
      movement session with
      professional dancer (Lee) in the Atelier. The variety of physiological responses of the participants to various
      multi-modal experiences
      will also provide feedback on how certain exhibit pathways and the newly renovated space of the Atelier impacts
      on the experiences of a range of visitors. Thus, this component, designed in collaboration with an arts educator
      (Lajeunesse), art
      historians (Park, Tembeck), and museology graduate student (Laurin) poses questions about the potentialities and
      ethical
      considerations around privacy, power and representation.
    </div>
    
    <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
  </div>);
};

BiomusicAesthetics.propTypes = {
  title: React.PropTypes.string,
};

export default BiomusicAesthetics;
