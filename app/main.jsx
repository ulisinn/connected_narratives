import './styles/main.scss';
import React, {Component} from 'react';
import Header from './components/header';
import NavContainer from './components/nav_container';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      isDropdown: false,
      navigation: [
        {
          url: 'project',
          category: 'project',
          title: 'project description',
          short: '',
          date: '',
        },
        {
          url: 'schedule',
          category: 'schedule',
          title: 'schedule & panelists',
          short: '',
        },
        {
          url: 'schedule',
          category: 'schedule',
          title: 'CREATING SOCIAL-SPATIAL INCLUSION FOR AUTISM-INCLUSIVE CITIES',
          short: '',
          date: '(APRIL 23RD, 1-4.30 PM)',
        },
        {
          url: 'schedule',
          category: 'schedule',
          title: 'REFLECTING ON THE POTENTIALITIES OF BIOMUSIC',
          short: '',
          date: '(APRIL 24TH, 8.30 AM – NOON)',
        },
        {
          url: 'schedule',
          category: 'schedule',
          title: 'EXPERIENCING THE AESTHETICS OF BIOMUSIC',
          short: '',
          date: '(APRIL 24TH, 8.30 AM – NOON)',
        },
        {
          url: 'schedule',
          category: 'schedule',
          title: 'ENACTING INCLUSION',
          short: '',
          date: '(APRIL 25TH, 8.30 AM – NOON)',
        },
        {
          url: 'goals',
          category: 'goals',
          title: 'GOALS & OBJECTIVES',
          short: '',
          date: '',
        },
        {
          url: 'goals',
          category: 'goals',
          title: 'ENACTING INCLUSION',
          short: '',
          date: '(APRIL 25TH, 8.30 AM – NOON)',
        },
        {
          url: 'patrons',
          category: 'patrons',
          title: 'PATRONS & FUNDERS',
          short: '',
          date: '',
        },
        {
          url: 'contact',
          category: 'contact',
          title: 'contact',
          short: '',
          date: '',
        },
        {
          url: 'fr',
          category: 'fr',
          title: 'français',
          short: '',
          date: '',
        },
      ],
    }
    ;
  }
  
  onResize(evt) {
    var dropdown;
    if (window.innerWidth > 945) {
      dropdown = false;
    } else {
      dropdown = true;
    }
    if (dropdown !== this.state.isDropdown) {
      this.setState({ isDropdown: dropdown });
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', (e) => this.onResize());
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', (e) => this.onResize());
    
  }
  
  render() {
    return <div>
      <Header {...this.state}></Header>
      <NavContainer {...this.state}></NavContainer>
    </div>;
  }
}
