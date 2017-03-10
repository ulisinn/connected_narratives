import '../styles/main.scss';

import React, {Component} from 'react';
import NavItemWide from './nav_item_wide';
import DropdownItem from './nav_item_dropdown';

export default class NavItemContainerWide extends Component {
  constructor() {
    super(...arguments);
  }
  
  componentWillMount() {
    // this.props.onToggleDropdown({ name: 'narrow' });
    // this.props.onNavClick({ name: 'NavItemContainerNarrow onNavClick' });
    // this.props.onNavEnter({ name: 'NavItemContainerNarrow onNavEnter' });
    // this.props.onNarrowNavClick({ name: 'NavItemContainerNarrow onNarrowNavClick' });
  }
  
  render() {
    // console.log('NavItemContainerWide props', this.props);
    let list = (this.props.navigation).filter((item, index) => {
      if (this.props.category === item.category) {
        return true;
      } else {
        return false;
      }
    });
    // console.log('NavItemNarrow Container render', list);
    
    let listItems = list.map((item, index) => {
      if (!item.dropdown) {
        return <NavItemWide key={index} {...this.props} {...item}/>;
      } else {
        return <DropdownItem key={index} {...this.props} {...item}/>;
      }
    });
    return <div>{listItems}</div>;
  }
}
