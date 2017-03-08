import '../styles/main.scss';

import React, {Component} from 'react';
const classNames = require('classnames');

export default class DropdownItem extends Component {
  constructor() {
    super(...arguments);
  }
  
  componentWillMount() {
    /*    console.log('DropdownItem componentWillMount', this.props);
     this.props.onToggleDropdown({ name: 'narrow' });
     this.props.onNavClick({ name: 'DropdownItemonNavClick' });
     this.props.onNavEnter({ name: 'DropdownItem onNavEnter' });
     this.props.onNarrowNavClick({ name: 'DropdownItem onNarrowNavClick' });*/
  }
  
  onNavEnter(evt) {
    if (this.props.isNarrow) {
      return;
    }
    this.props.onNavEnter({ name: this.props.category })
    
  }
  
  onNavLeave(evt) {
    if (this.props.isNarrow) {
      return;
    }
    this.props.onNarrowNavClick({ name: this.props.category })
  }
  
  onNavClick(evt) {
    // console.log('DropdownItem onNavClick', this.props);
    this.props.onNavClick({ name: this.props.url })

  }
  
  render() {
    // console.log('DropdownItem render ', this.props.mainDropdownVisible);
    
    const dropdownClass = classNames({
      'dropdownItem': true,
      'hidden': !this.props.mainDropdownVisible,
    });
    
    return <div className={dropdownClass}
                onMouseEnter={(evt) => this.onNavEnter(evt)}
                onMouseLeave={(evt) => this.onNavLeave(evt)}
                onClick={(evt) => this.onNavClick(evt)}
    >
      <p className="helvetica">{this.props.title}</p>
      <p className="helveticaBold">{this.props.date}</p>
    </div>
  }
}
