import '../styles/main.scss';

import React, {Component} from 'react';
import NavItem from './nav_item';
import DropdownItem from './dropdown_item';

export default class NavItemContainer extends Component {
  constructor() {
    super(...arguments);
  }
  
  componentWillMount() {
    // this.props.onToggleDropdown({ name: 'narrow' });
    // this.props.onNavClick({ name: 'NavItemContainer onNavClick' });
    // this.props.onNavEnter({ name: 'NavItemContainer onNavEnter' });
    // this.props.onNavLeave({ name: 'NavItemContainer onNavLeave' });
  }
  
  render() {
    let list = (this.props.navigation).filter((item, index) => {
      if (this.props.category === item.category) {
        // console.log('props', this.props, 'item', item, index);
        return true;
      } else {
        return false;
      }
    });
    // console.log('NavItem Container render', list);
    
    let listItems = list.map((item, index) => {
      if (!item.dropdown) {
        return <NavItem key={index} {...this.props} {...item}/>
      } else {
        return <DropdownItem key={index} {...this.props} {...item}/>
      }
    });
    return <div>{listItems}</div>
  }
}
