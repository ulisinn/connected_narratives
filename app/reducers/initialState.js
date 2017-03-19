/**
 * Created by ulrichsinn on 03/09/2017.
 */

import uuid from 'uuid';

export const initialState = {
  mainDropdownVisible: false,
  currentNavigation: [],
  navigation_en: [
    {
      id: uuid.v4(),
      url: 'description',
      category: 'project',
      title: 'project description',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: 'schedule',
      category: 'schedule',
      title: 'schedule & panelists',
      short: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: 'social_spacial_inclusion',
      category: 'schedule',
      title: 'CREATING SOCIAL-SPATIAL INCLUSION FOR AUTISM-INCLUSIVE CITIES',
      short: 'SOCIAL-SPATIAL INCLUSION',
      date: '(APRIL 23RD, 1-4.30 PM)',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      url: 'biomusic_potentialities',
      category: 'schedule',
      title: 'REFLECTING ON THE POTENTIALITIES OF BIOMUSIC',
      short: 'POTENTIALITIES OF BIOMUSIC',
      date: '(APRIL 24TH, 8.30 AM – NOON)',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      url: 'biomusic_aesthetics',
      category: 'schedule',
      title: 'EXPERIENCING THE AESTHETICS OF BIOMUSIC',
      short: 'AESTHETICS OF BIOMUSIC',
      date: '(APRIL 24TH, 8.30 AM – NOON)',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      
      url: 'enacting_inclusion',
      category: 'schedule',
      title: 'ENACTING INCLUSION',
      short: 'ENACTING INCLUSION',
      date: '(APRIL 25TH, 8.30 AM – NOON)',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      
      url: 'goals',
      category: 'goals',
      title: 'GOALS & OBJECTIVES',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      
      url: 'research_description',
      category: 'goals',
      title: 'DESCRIPTION OF THE RESEARCH TO BE DISSEMINATED, EXCHANGED, MOBILIZED',
      short: 'RESEARCH DESCRIPTION',
      date: '',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      
      url: 'patrons',
      category: 'patrons',
      title: 'PATRONS & FUNDERS',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      
      url: 'contact',
      category: 'contact',
      title: 'contact',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      
      url: 'en',
      category: 'en',
      title: 'english',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      url: 'fr',
      category: 'fr',
      title: 'français',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: '',
      category: 'hamburger',
      title: '☰',
      short: '',
      date: '',
      dropdown: false,
    },
  ],
  navigation_fr: [
    {
      id: uuid.v4(),
      url: 'description',
      category: 'project',
      title: 'fr-project description',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: 'schedule',
      category: 'schedule',
      title: 'fr-schedule & panelists',
      short: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: 'social_spacial_inclusion',
      category: 'schedule',
      title: 'fr-CREATING SOCIAL-SPATIAL INCLUSION FOR AUTISM-INCLUSIVE CITIES',
      short: 'fr-SOCIAL-SPATIAL INCLUSION',
      date: '(APRIL 23RD, 1-4.30 PM)',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      url: 'biomusic_potentialities',
      category: 'schedule',
      title: 'fr-REFLECTING ON THE POTENTIALITIES OF BIOMUSIC',
      short: 'fr-POTENTIALITIES OF BIOMUSIC',
      date: '(APRIL 24TH, 8.30 AM – NOON)',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      url: 'biomusic_aesthetics',
      category: 'schedule',
      title: 'fr-EXPERIENCING THE AESTHETICS OF BIOMUSIC',
      short: 'fr-AESTHETICS OF BIOMUSIC',
      date: '(APRIL 24TH, 8.30 AM – NOON)',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      url: 'enacting_inclusion',
      category: 'schedule',
      title: 'fr-ENACTING INCLUSION',
      short: 'fr-ENACTING INCLUSION',
      date: '(APRIL 25TH, 8.30 AM – NOON)',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      url: 'goals',
      category: 'goals',
      title: 'fr-GOALS & OBJECTIVES',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: 'research_description',
      category: 'goals',
      title: 'fr-DESCRIPTION OF THE RESEARCH TO BE DISSEMINATED, EXCHANGED, MOBILIZED',
      short: 'fr-RESEARCH DESCRIPTION',
      date: '',
      dropdown: true,
    },
    {
      id: uuid.v4(),
      url: 'patrons',
      category: 'patrons',
      title: 'fr-PATRONS & FUNDERS',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: 'contact',
      category: 'contact',
      title: 'fr-contact',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: 'en',
      category: 'en',
      title: 'fr-english',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: 'fr',
      category: 'fr',
      title: 'fr-français',
      short: '',
      date: '',
      dropdown: false,
    },
    {
      id: uuid.v4(),
      url: '',
      category: 'hamburger',
      title: '☰',
      short: '',
      date: '',
      dropdown: false,
    },
  ],
};
