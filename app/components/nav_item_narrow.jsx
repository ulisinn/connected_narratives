import '../styles/main.scss';

import React, {Component} from 'react';
const classNames = require('classnames');

export default class NavItemNarrow extends Component {
  constructor() {
    super(...arguments);
  }
  
  onNavClick(evt) {
    console.log('CLICK', this.props.url);
    this.props.onNarrowNavClick({ name: (this.props.category === 'hamburger') ? this.props.category : this.props.url })
  }
  
  render() {
    // console.log('NavItemNarrow', this.props);
    const dropdownHidden = classNames({
      'narrowNavItem': true,
      'hidden': (this.props.category === 'hamburger' || this.props.mainDropdownVisible) ? false : true,
      'hamburger': (this.props.category === 'hamburger') ? true : false,
    });
    
    return <div className={dropdownHidden}
                onClick={(evt) => this.onNavClick(evt)}
    >{(this.props.dropdown) ? this.props.short : this.props.title}</div>
  }
}
