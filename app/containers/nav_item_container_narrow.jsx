import '../styles/main.scss';

import React, {Component} from 'react';
import NavItemNarrow from '../components/nav_item_narrow';

export default class NavItemContainerNarrow extends Component {
  
  render() {
    const list = (this.props.category === 'hamburger') ? this.getHamburger() : this.getDropdown();
    console.log('NavItemContainerNarrow', list);
    
    let listItems = list.map((item, index) => {
      return <NavItemNarrow key={index}
                            id={item.id}
                            link={item.url}
                            title={item.title}
                            short={item.short}
                            onHamburgerClick={() => this.props.onHamburgerClick()}
                            onLanguageClick={(lang) => this.props.onLanguageClick(lang)}
                            onNavClick={() => this.props.onNavClick()}
      
      />;
    });
    return <div>{listItems}</div>
  }
  
  
  getHamburger() {
    let list = (this.props.currentNavigation).filter((item, index) => {
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
    let list = (this.props.currentNavigation).filter((item, index) => {
      console.log('NavItemContainerNarrow list', item, this.props.lang);
      if (item.category === 'hamburger' || item.url === this.props.lang) {
        return false;
      } else {
        return true;
      }
    });
    
    return list;
  }
  
}
