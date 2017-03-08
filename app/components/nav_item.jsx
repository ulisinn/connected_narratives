import '../styles/main.scss';

import React, {Component} from 'react';

export default class NavItem extends Component {
  constructor() {
    super(...arguments);
  }
  
  componentWillMount() {
    // console.log('componentWillMount', this.props);
    // this.props.onToggleDropdown({ name: 'narrow' });
    // this.props.onNavClick({ name: 'NavItem onNavClick' });
    // this.props.onNavEnter({ name: 'NavItem onNavEnter' });
    // this.props.onNavLeave({ name: 'NavItem onNavLeave' });
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
      this.props.onNavEnter({ name: this.props.category })
    }
  }
  
  onNavLeave(evt) {
    if (this.props.isNarrow) {
      return;
    }
    let numItems = this.props.navigation.reduce((previous, current, array, index) => {
      return (current.category === this.props.category) ? previous + 1 : previous;
    }, 0);
    
    // console.log(numItems);
    if (numItems > 1) {
      this.props.onNavLeave({ name: this.props.category })
    }
  }
  
  onNavClick(evt) {
    this.props.onNavClick({ name: this.props.url })
  }
  
  render() {
    return <div className="navItem"
                onMouseEnter={(evt) => this.onNavEnter(evt)}
                onMouseLeave={(evt) => this.onNavLeave(evt)}
                onClick={(evt) => this.onNavClick(evt)}
    >{this.props.title}</div>
  }
}
