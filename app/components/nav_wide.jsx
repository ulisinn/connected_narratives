import '../styles/main.scss';

import React, {Component} from 'react';
import NavItemContainerWide from './nav_item_container_wide';

export default class NavWide extends Component {
  constructor() {
    super(...arguments);
  }
  
  componentWillMount() {
    //
  }
  
  render() {
    let callbacks = [
      this.props.onNavClick,
      this.props.onNavEnter,
      this.props.onNarrowNavClick,
      this.props.onToggleDropdown,
    ];
    
    let navItems = (this.props.navigation).filter((item) => {
      if (item.category === 'hamburger' || item.dropdown || item.category === this.props.lang) {
        // console.log(item);
        return false
      } else {
        return true;
        
      }
    });
    
    // console.log('NavItemContainerNarrow render navItems', navItems);
    
    let container = (navItems).map((item, index) => {
        // console.log('map:', index, item);
        return <NavItemContainerWide
          key={index}
          {...item}
          {...this.props}
        />
      }
    );
    return <div id="navcontainer">{container}</div>
  }
}
