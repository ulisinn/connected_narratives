import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const EnactingInclusion = () => {
  return (<div id="enacting_inclusion" className="content">
    <div className="content">
      <ContentHeader text="Enacting inclusion"/>
      <ContentHeader text="(April 25th, 8.30 am – noon)"/>
      
      <div className="contentBody">Our initiative for social inclusion will close with a panel discussion at the <span
        className="contentBodyEm">Centre for Interdisciplinary Research
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
      <ContentHeader text="Description of the main audience"/>
      
      <div className="contentBody">Given the range of the questions raised by our investigations at the interface of autism and biomusic,
        it is clear that these concerns cannot be successfully addressed by any one discipline. Instead, they require
        a concerted effort across the entrenched silos of philosophy and practice, natural sciences and the humanities,
        the plastic and the mechanical arts. As such, this project was designed as an integrated knowledge mobilization project
        in order to disseminate knowledge multi-directionally across disciplines and sectors: citizen stakeholders, such as
        parents, who possess experiential knowledge of what this technology could offer; academics holding both theoretical and technical knowledge; members of the tech industry and universal designers who can provide insight into best
        practices; and local bureaucrats committed to creating more accessible public spaces. The days’ events will also be filmed by Productions Spectrum to create public service announcements to be distributed via the links and networks
        of invited participants.
      </div>
      
      <ContentFooter text='Interfacing Biomusic & Autism © 2017' />
    </div>
  </div>);
};

EnactingInclusion.propTypes = {
  title: React.PropTypes.string,
};

export default EnactingInclusion;
