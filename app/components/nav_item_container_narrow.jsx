import '../styles/main.scss';

import React, {Component} from 'react';
import NavItemNarrow from './nav_item_narrow';

export default class NavItemContainerNarrow extends Component {
  constructor() {
    super(...arguments);
  }
  
  render() {
    console.log('NavItemContainerNarrow', this.props);
    let list = (this.props.category === 'hamburger') ? this.getHamburger() : this.getDropdown();
    
    console.log('NavItemNarrow Container render', list);
    
    
    let listItems = list.map((item, index) => {
      return <NavItemNarrow key={index} {...this.props} {...item}/>
      
    });
    return <div>{listItems}</div>
  }
  
  getHamburger() {
    let list = (this.props.navigation).filter((item, index) => {
      // console.log('NavItemContainerNarrow list', item, index);
      if (item.category === 'hamburger') {
        return true;
      } else {
        return false;
      }
    });
    
    return list;
  }
  
  getDropdown() {
    let list = (this.props.navigation).filter((item, index) => {
      // console.log('NavItemContainerNarrow list', item, index);
      if (item.category === 'hamburger' || item.category === this.props.lang) {
        return false;
      } else {
        return true;
      }
    });
    
    return list;
  }
}
