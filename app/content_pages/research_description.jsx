import '../styles/main.scss';

import React from 'react';
import ContentHeader from '../components/content_header';
import ContentFooter from '../components/content_footer';

const ResearchDescription = () => {
  return (<div id="research_description" className="contentWrapper">
      <div className="content">
        <ContentHeader text="Description of the research to be disseminated, exchanged, mobilized"/>
        
        <div className="contentBody">Autists directly link their experiences of socio-spatial exclusion to
          neurophysiological sensitivities and differences (Davidson, 2010). The increasing prevalence of autism and its
          depictions in media has raised this clinical category to the level of a social and cultural phenomenon. Yet,
          neither the economic calculations of its global burden (Baxter et al., 2014), nor its place of prominence “in
          ongoing social science and humanities debates about intersubjectivity, intentionality, empathy, and the social
          construction of disability” (Solomon, 2010: 242) address the very real personal and actual cost of
          misunderstanding and stigmatization of autists and their families (Kinnear et al., 2016).
        </div>
        <div className="contentBody">Biomusic, by enabling others to “tune in” to meaningful changes in an individual’s
          physiological state, has been shown to increase the sense of presence and personhood of persons who have
          diverse communicative capacities (Blain-Moraes et al., 2013). Thus, biomusic has profound implications for
          persons on the neurological spectrum, as it pushes the boundaries circumscribing subjectivity by offering a
          potential new mode of becoming aware of others’ sensitivities, counteracting (often misread) culturally
          informed ways of interpreting another’s expressions and actions (Kirmayer and Ramstead, Forthcoming), and
          thus, potentially supporting more inclusive ways of interacting with others. However, providing uninvited
          insight into an individual’s electrophysiological states has the equal potentiality of being misused and
          abused, which raises a number of overlapping <span className="contentBodyEm">everyday ethical, aesthetic and practical concerns</span> that must be addressed before it can be meaningfully integrated into everyday life. <span className="contentBodyIt">Everyday ethics</span>, an
          emerging field of philosophical inquiry in fields ranging from ethnographic, first- person anthropology
          (Mattingly, 2012;
          Mattingly, 2014; Lambek, 2015; Keane, 2015) to neuroscience (Zizzo et al., 2016) and philosophy (Massumi)
          shifts attention to how contemplations of the best good, that guide our actions, emerges in our everyday
          interactions with other. Since biomusic “reveals” otherwise tacit embodied expressions, the everyday ethical
          concerns pertain, amongst other things, to potential transgressions of the boundaries of privacy and power
          (Sterne, 2012) and misreading or imposition of meaning during the process of translating (Latour, 1999)
          physiological signals to emotional states. How do we decide what is the best good for a range of particular
          situations with unique personal experiences? The aesthetic concerns pertain to the history of cultural
          representations of disability at large and of autism in particular, in which individuals identified as
          “others” to the norm are held to be representative of atypical traits rather than unique sensibilities
          (Gilman, 2014; Prince, 2010; Gilman, 1988; Gilman, 1985; Prince-Hughes, 2013). To what extent might biomusic
          have the potential to fall in a similar trap, as the aestheticized (musical) expression of non-neurotypical
          physiological responses? Finally, the practical concerns we wish to address concern the design, implementation
          and use of biomusic as a communication technology across diverse neurological experiences, and its potential
          furthering of the stigmatization of persons with invisible disabilities.
        </div>
        
        <div className="contentBody">The sequence of events and selection of locations over the three-day event embody
          the values of integrated knowledge mobilization. We will explore: (1) the capacities and challenges facing
          initiatives to create autism-friendly cities led by citizen stakeholders in a public venue; (2) the background
          and potentialities of physiological signal analysis, followed by a multi-sensory experience of translating
          physiological signals into biomusic in cultural institutions for the sciences and the arts; and (3) an open
          roundtable discussion on the potentialities, including everyday ethical challenges of using biotechnology to
          ameliorate inclusion in an interinstitutional research center.
        
        </div>
        <ContentFooter text='Interfacing Biomusic & Autism © 2017'/>
      </div>
    </div>
  );
};

ResearchDescription.propTypes = {
  title: React.PropTypes.string,
};

export default ResearchDescription;

