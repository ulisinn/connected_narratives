/**
 * Created by ulrichsinn on 03/09/2017.
 */

import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Main from './components/main';
import Home from './content_pages/home';
import BiomusicAesthetics from './content_pages/biomusic_aesthetics';
import BiomusicPotentialities from './content_pages/biomusic_potentialities';
import Contact from './content_pages/contact';
import Description from './content_pages/description';
import EnactingInclusion from './content_pages/enacting_inclusion';
import Goals from './content_pages/goals';
import Patrons from './content_pages/patrons';
import ResearchDescription from './content_pages/research_description';
import Schedule from './content_pages/schedule';
import SocialSpatialInclusion from './content_pages/social_spacial_inclusion';
import Videos from './content_pages/videos';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="biomusic_aesthetics" component={BiomusicAesthetics}/>
    <Route path="biomusic_potentialities" component={BiomusicPotentialities}/>
    <Route path="contact" component={Contact}/>
    <Route path="description" component={Description}/>
    <Route path="enacting_inclusion" component={EnactingInclusion}/>
    <Route path="goals" component={Goals}/>
    <Route path="patrons" component={Patrons}/>
    <Route path="research_description" component={ResearchDescription}/>
    <Route path="schedule" component={Schedule}/>
    <Route path="social_spacial_inclusion" component={SocialSpatialInclusion}/>
    <Route path="videos" component={Videos}/>
    <Route path="*" component={Home}/>
  </Route>
);
