import '../styles/main.scss';

import React, {Component} from 'react';
import NavItemContainerNarrow from './nav_item_container_narrow';

export default class NavNarrow extends Component {
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
    
    let navItems = (this.props.navigation).filter((item, index) => {
      if (item.category === 'hamburger' || index === 0) {
        // console.log(item);
        return true
      } else {
        return false;
      }
    });
    
    // console.log('NavItemContainerNarrow render navItems', navItems);
    
    let container = (navItems).map((item, index) => {
        // console.log('map:', index, item);
        return <NavItemContainerNarrow
          key={index}
          {...item}
          {...this.props}
        />
      }
    );
    return <div id="navcontainer">{container}</div>
  }
}
