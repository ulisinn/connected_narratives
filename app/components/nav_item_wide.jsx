import '../styles/main.scss';

import React, {Component} from 'react';
import {Link} from 'react-router';

export default class NavItemWide extends Component {
  constructor() {
    super(...arguments);
  }
  
  componentWillMount() {
    // console.log('componentWillMount', this.props);
    // this.props.onToggleDropdown({ name: 'narrow' });
    // this.props.onNavClick({ name: 'NavItemNarrow onNavClick' });
    // this.props.onNavEnter({ name: 'NavItemNarrow onNavEnter' });
    // this.props.onNarrowNavClick({ name: 'NavItemNarrow onNarrowNavClick' });
  }
  
  onNavEnter(evt) {
    if (this.props.isNarrow) {
      return;
    }
    let numItems = this.props.navigation.reduce((previous, current, array, index) => {
      return (current.category === this.props.category) ? previous + 1 : previous;
    }, 0);
    
    // console.log(numItems);
    if (numItems > 1) {
      this.props.onNavEnter({ name: this.props.category });
    }
  }
  
  onNavLeave() {
    if (this.props.isNarrow) {
      return;
    }
    let numItems = this.props.navigation.reduce((previous, current, array) => {
      return (current.category === this.props.category) ? previous + 1 : previous;
    }, 0);
    
    // console.log(numItems);
    if (numItems > 1) {
      this.props.onNarrowNavClick({ name: this.props.category });
    }
  }
  
  onNavClick(evt) {
    this.props.onNavClick({ name: this.props.url });
  }
  
  render() {
    const link = '/' + this.props.url;
    const style = {
      textDecoration: 'none',
      color: 'inherit',
    };
    
    return <Link style={style} to={link}><div className="navItem"
                onMouseEnter={(evt) => this.onNavEnter(evt)}
                onMouseLeave={(evt) => this.onNavLeave(evt)}
                onClick={(evt) => this.onNavClick(evt)}
    >{this.props.title}</div></Link>;
  }
}
