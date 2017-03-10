import './styles/main.scss';
import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Header from './components/header';
import NavContainer from './components/nav_container';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      mainDropdownVisible: false,
      lang: 'en',
      isNarrow: false,
      navigation: [
        {
          url: 'description',
          category: 'project',
          title: 'project description',
          short: '',
          date: '',
          dropdown: false,
        },
        {
          url: 'schedule',
          category: 'schedule',
          title: 'schedule & panelists',
          short: '',
          dropdown: false,
        },
        {
          url: 'social_spacial_inclusion',
          category: 'schedule',
          title: 'CREATING SOCIAL-SPATIAL INCLUSION FOR AUTISM-INCLUSIVE CITIES',
          short: 'SOCIAL-SPATIAL INCLUSION',
          date: '(APRIL 23RD, 1-4.30 PM)',
          dropdown: true,
        },
        {
          url: 'biomusic_potentialities',
          category: 'schedule',
          title: 'REFLECTING ON THE POTENTIALITIES OF BIOMUSIC',
          short: 'POTENTIALITIES OF BIOMUSIC',
          date: '(APRIL 24TH, 8.30 AM – NOON)',
          dropdown: true,
        },
        {
          url: 'biomusic_aesthetics',
          category: 'schedule',
          title: 'EXPERIENCING THE AESTHETICS OF BIOMUSIC',
          short: 'AESTHETICS OF BIOMUSIC',
          date: '(APRIL 24TH, 8.30 AM – NOON)',
          dropdown: true,
        },
        {
          url: 'enacting_inclusion',
          category: 'schedule',
          title: 'ENACTING INCLUSION',
          short: 'ENACTING INCLUSION',
          date: '(APRIL 25TH, 8.30 AM – NOON)',
          dropdown: true,
        },
        {
          url: 'goals',
          category: 'goals',
          title: 'GOALS & OBJECTIVES',
          short: '',
          date: '',
          dropdown: false,
        },
        {
          url: 'research_description',
          category: 'goals',
          title: 'DESCRIPTION OF THE RESEARCH TO BE DISSEMINATED, EXCHANGED, MOBILIZED',
          short: 'RESEARCH DESCRIPTION',
          date: '',
          dropdown: true,
        },
        {
          url: 'patrons',
          category: 'patrons',
          title: 'PATRONS & FUNDERS',
          short: '',
          date: '',
          dropdown: false,
        },
        {
          url: 'contact',
          category: 'contact',
          title: 'contact',
          short: '',
          date: '',
          dropdown: false,
        },
        {
          url: '',
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
          url: '',
          category: 'hamburger',
          title: '☰',
          short: '',
          date: '',
          dropdown: false,
        },
      ],
    };
    this.onNavEnter = this.onNavEnter.bind(this);
    this.onNarrowNavClick = this.onNarrowNavClick.bind(this);
    this.onNavClick = this.onNavClick.bind(this);
    
    let wideDropdownTimeout;
  }
  
  componentWillMount() {
    this.onResize();
  }
  
  onToggleDropdown(evt) {
    // console.log('onToggleDropdown', evt);
  }
  
  // WIDE NAV
  
  onNavClick(evt) {
    this.killTimeout();
    this.setState({ mainDropdownVisible: false });
    this.navigateToUrl(evt.name);
  }
  
  onNavEnter(evt) {
    this.killTimeout();
    if (!this.state.isNarrow) {
      this.setState({ mainDropdownVisible: true });
      // console.log('onNavEnter', this, this.state);
      this.startTimeout();
    }
  }
  
  onNarrowNavClick(evt) {
    const dropdownVisible = this.state.mainDropdownVisible;
    this.killTimeout();
    this.setState({ mainDropdownVisible: !dropdownVisible });
    console.log('onNavClick', evt);
    if (evt.name !== 'hamburger') {
      this.navigateToUrl(evt.name);
    }
  }
  
  navigateToUrl(str) {
    console.log('navigateToUrl', str);
    
  }
  
  onResize(evt = {}) {
    let isNarrow;
    if (window.innerWidth > 900) {
      isNarrow = false;
    } else {
      isNarrow = true;
    }
    if (isNarrow !== this.state.isNarrow) {
      this.setState({ isNarrow: isNarrow, mainDropdownVisible: false });
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', (e) => this.onResize());
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', (e) => this.onResize());
    
  }
  
  render() {
    return <div id="topNode">
      <Header {...this.state}></Header>
      <NavContainer {...this.state}
                    onToggleDropdown={this.onToggleDropdown}
                    onNavClick={this.onNavClick}
                    onNavEnter={this.onNavEnter}
                    onNarrowNavClick={this.onNarrowNavClick}
                    {...this.props}
      ></NavContainer>
      {this.props.children}
    </div>;
  }
  
  startTimeout() {
    console.log('startTimeout', this.wideDropdownTimeout);
    
    this.wideDropdownTimeout = setTimeout(() => {
      this.setState({ mainDropdownVisible: false });
      this.killTimeout();
    }, 3000);
  }
  
  killTimeout() {
    clearTimeout(this.wideDropdownTimeout);
    console.log('killTimeout', this.wideDropdownTimeout);
  }
}
