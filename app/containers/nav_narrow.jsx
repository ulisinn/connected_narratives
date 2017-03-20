import '../styles/main.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions';

import NavItemContainerNarrow from './nav_item_container_narrow';

class NavNarrow extends Component {
  constructor() {
    super();
    this.state = { mainDropdownVisible: false };
  }
  
  componentWillMount() {
    //
  }
  
  render() {
    
    let navItems = (this.props.currentNavigation).filter((item, index) => {
      if (item.category === 'hamburger' || index === 0) {
        // console.log(item);
        return true;
      } else {
        return false;
      }
    });
    
    // console.log('NavItemContainerNarrow render navItems', navItems);
    
    let container = (navItems).map((item, index) => {
        // console.log('map:', index, item);
        return <NavItemContainerNarrow
          category={item.category}
          currentNavigation={this.props.currentNavigation}
          onHamburgerClick={(lang) => this.onHamburgerClick(lang)}
          onLanguageClick={(lang) => this.onLanguageClick(lang)}
          onNavClick={() => this.onNavClick()}
          mainDropdownVisible={this.state.mainDropdownVisible}
          lang={this.props.lang}
          key={index}
        />;
      }
    );
    return <div id="navcontainer"
                ref={(el) => {
                  this.navcontainer = el;
                }}>
      {container}
    </div>;
  }
  
  
  onHamburgerClick(lang) {
    console.log('onHamburgerClick', this.state);
    
    const children = this.navcontainer.getElementsByClassName('isNarrowDropdown');
    const numChildren = children.length;
    if (!this.state.mainDropdownVisible) {
      for (var i = 0; i < numChildren; i++) {
        var item = children[i];
        if (item.classList.contains('hidden')) {
          item.classList.remove('hidden');
        }
      }
      this.setState({ mainDropdownVisible: true });
    } else {
      this.hideDropdown();
    }
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
    this.hideDropdown();
  }
  
  hideDropdown() {
    const children = this.navcontainer.getElementsByClassName('isNarrowDropdown');
    console.log('hideDropdown');
    
    for (let item of children) {
      item.classList.add('hidden');
    }
    this.setState({ mainDropdownVisible: false });
    
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
)(NavNarrow);
