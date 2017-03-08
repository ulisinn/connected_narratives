import '../styles/main.scss';

import React, {Component} from 'react';
import NavItemContainer from './nav_item_container';

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
      this.props.onNavLeave,
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
    
    // console.log('NavItemContainer render navItems', navItems);
    
    let container = (navItems).map((item, index) => {
        // console.log('map:', index, item);
        return <NavItemContainer
          key={index}
          {...item}
          {...this.props}
        />
      }
    );
    return <div id="navcontainer">{container}</div>
  }
}
