import '../styles/main.scss';

import React from 'react';
import {Link} from 'react-router';
const classNames = require('classnames');


const style = {
  textDecoration: 'none',
  color: 'inherit',
};

const NavItemNarrow = ({
                         id,
                         link,
                         title,
                         short,
                         onHamburgerClick,
                         onLanguageClick,
                         onNavClick,
                       }) => {
  const languageDropdown = classNames({
    'narrowNavItem': true,
    'hidden': true,
    'isNarrowDropdown': true,
  });
  
  const dropdownHidden = classNames({
    'hidden': true,
    'isNarrowDropdown': true,
  });
  
  if (link === '') {
    return <div className='hamburger' onClick={() => onHamburgerClick()}>{title}</div>;
  }
  if (link == 'fr' || link == 'en') {
    return <div className={languageDropdown} onClick={() => onLanguageClick(link)}>
      { title }
    </div>;
  }
  const text = (short.length > 0) ? short : title;
  return <Link style={style}
               className={dropdownHidden}
               to={link}
               onClick={() => onNavClick()}
  >
    <div className="narrowNavItem">
      {text}
    </div>
  </Link>;
};

export default NavItemNarrow;
