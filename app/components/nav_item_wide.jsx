import '../styles/main.scss';

import React from 'react';
import {Link} from 'react-router';

const style = {
  textDecoration: 'none',
  color: 'inherit',
};

const NavItemWide = ({
                       id,
                       link,
                       title,
                       onNavEnter,
                       onNavLeave,
                       onNavClick,
                       onLanguageClick,
                     }) => {
  console.log('link', link);
  if (link == 'fr' || link == 'en') {
    return <div className="navItem" onClick={() => onLanguageClick(link)}>
      { title }
    </div>;
  }
  return <Link style={style}
               to={link}
               onMouseEnter={() => onNavEnter(id)}
               onMouseLeave={() => onNavLeave(id)}
               onClick={() => onNavClick(id)}>
    <div className="navItem">
      {title}
    </div>
  </Link>;
};

export default NavItemWide;
