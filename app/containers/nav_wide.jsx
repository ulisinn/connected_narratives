import '../styles/main.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

import NavItemContainerWide from './nav_item_container_wide';

class NavWide extends Component {
  constructor() {
    super(...arguments);
    let rollOutTimer;
  }
  
  render() {
    
    const navItems = (this.props.currentNavigation).filter((item) => {
      if (item.category === 'hamburger' || item.dropdown || item.category === this.props.lang) {
        // console.log(item);
        return false;
      } else {
        return true;
        
      }
    });
    
    const container = (navItems).map((item, index) => {
        // console.log('map:', index, item);
        return <NavItemContainerWide
          category={item.category}
          currentNavigation={this.props.currentNavigation}
          onNavEnter={(id, el) => this.onNavEnter(id, el)}
          onNavLeave={(id, el) => this.onNavLeave(id, el)}
          onNavClick={(id, el) => this.onNavClick(id, el)}
          onLanguageClick={(lang) => this.onLanguageClick(lang)}
          key={index}
        />;
      }
    );
    
    console.log('navItems', navItems, container);
    return <div id="navcontainer"
                ref={(el) => {
                  this.navcontainer = el;
                }}>{container}</div>;
  }
  
  onLanguageClick(lang) {
    console.log('onLanguageClick', lang, this.props.actions.toggleNavigation);
    
    if (lang === 'fr') {
      this.props.actions.toggleLanguage('fr');
      this.props.actions.toggleNavigation('fr');
    } else {
      this.props.actions.toggleLanguage('en');
      this.props.actions.toggleNavigation('en');
    }
  }
  
  onNavClick() {
    clearTimeout(this.rollOutTimer);
    this.hideDropdown();
  }
  
  onNavEnter(id, ref) {
    if (this.rollOutTimer) {
      clearTimeout(this.rollOutTimer);
    }
    if (ref.children.length === 1) {
      this.hideDropdown();
      return;
    }
    const children = this.navcontainer.getElementsByClassName('isDropdown');
    console.log('onNavEnter',children );
    const numChildren = children.length;
    for (var i = 0; i < numChildren; i++) {
      let item = children[i];
      if (item.classList.contains('hidden')) {
        item.classList.remove('hidden');
      }
    }
    /*    for (let item of children) {
     if (item.classList.contains('hidden')) {
     item.classList.remove('hidden');
     }
     }*/
  }
  
  onNavLeave(id, ref) {
    this.rollOutTimer = setTimeout(() => {
      // console.log('rollOutTimer', this.rollOutTimer);
      this.hideDropdown();
    }, 500);
  }
  
  hideDropdown() {
    const children = this.navcontainer.getElementsByClassName('isDropdown');
    const numChildren = children.length;
  
    for (var i = 0; i < numChildren; i++) {
      let item = children[i];
      item.classList.add('hidden');
    }
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavWide);
