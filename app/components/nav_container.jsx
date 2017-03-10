import '../styles/main.scss';

import React from 'react';
import NavNarrow from './nav_narrow';
import NavWide from './nav_wide';

const NavContainer = (props) => {
  // console.log('isNarrow', props.isNarrow, 'mainDropdownVisible', props.mainDropdownVisible);
  return (props.isNarrow) ? (<div id="topnavContainer">
    <div id="topNavBackground"></div>
    <NavNarrow {...props}/>
  </div>) : (
    <div id="topnavContainerOuter">
      <div id="topnavContainer" className="topNavContainerBackground">
        <div id="topNavBackground"></div>
        <NavWide {...props}/>
      </div>
    </div>);
};

export default NavContainer;
