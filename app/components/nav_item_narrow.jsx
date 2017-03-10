import '../styles/main.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';
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
    const link = '/' + this.props.url;
    const style = {
      textDecoration: 'none',
      color: 'inherit',
    };
    console.log('NavItemNarrow', link);
    const dropdownHidden = classNames({
      'narrowNavItem': true,
      'hidden': (this.props.category === 'hamburger' || this.props.mainDropdownVisible) ? false : true,
      'hamburger': (this.props.category === 'hamburger') ? true : false,
    });
    
    return (this.props.category === 'hamburger') ?
      <div className={dropdownHidden} onClick={(evt) => this.onNavClick(evt)}
      >{(this.props.dropdown) ? this.props.short : this.props.title}</div> : <Link style={style} to={link}>
        <div className={dropdownHidden}
             onClick={(evt) => this.onNavClick(evt)}
        >{(this.props.dropdown) ? this.props.short : this.props.title}</div>
      </Link>
  }
}
