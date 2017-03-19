import '../styles/main.scss';

import React, {Component} from 'react';

import NavItemWide from '../components/nav_item_wide';
import DropdownItem from '../components/nav_item_dropdown';

export default class NavItemContainerWide extends Component {
  
  render() {
    const list = this.getNavigationList();
    // console.log('NavItemContainerWide render', list);
    
    let listItems = list.map((item, index) => {
      if (!item.dropdown) {
        return <NavItemWide key={index}
                            id={item.id}
                            link={item.url}
                            title={item.title}
                            onNavEnter={(id) => this.onNavEnter(id)}
                            onNavLeave={(id) => this.onNavLeave(id)}
                            onNavClick={(id) => this.onNavClick(id)}
                            onLanguageClick={(lang) => this.props.onLanguageClick(lang)}
        />;
      } else {
        return <DropdownItem key={index}
                             id={item.id}
                             link={item.url}
                             title={item.title}
                             date={item.date}
                             onNavEnter={(id) => this.onNavEnter(id)}
                             onNavLeave={(id) => this.onNavLeave(id)}
                             onNavClick={(id) => this.onNavClick(id)}
        />;
      }
    });
    
    return <div
      ref={(el) => {
        this.navItemContainerWide = el;
      }}
    >{listItems}</div>;
  }
  
  onNavClick(id) {
    this.props.onNavClick(id, this.navItemContainerWide);
  }
  
  onNavEnter(id) {
    this.props.onNavEnter(id, this.navItemContainerWide);
  }
  
  onNavLeave(id) {
    this.props.onNavLeave(id, this.navItemContainerWide);
  }
  
  getNavigationList() {
    return (this.props.currentNavigation).filter((item, index) => {
      if (this.props.category === item.category) {
        return true;
      } else {
        return false;
      }
    });
  }
}
