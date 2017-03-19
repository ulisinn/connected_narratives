import '../styles/main.scss';

import React from 'react';
import {Link} from 'react-router';

const classNames = require('classnames');

const style = {
  textDecoration: 'none',
  color: 'inherit',
};

const dropdownClass = classNames({
  'dropdownItem': true,
  'hidden': true,
});

const DropdownItem = ({
                        id,
                        link,
                        title,
                        date,
                        onNavEnter,
                        onNavLeave,
                        onNavClick,
                      }) => (
  
  <Link to={link} style={style} className='isDropdown hidden'
        onMouseEnter={() => onNavEnter(id)}
        onMouseLeave={() => onNavLeave(id)}
        
  >
    <div className='dropdownItem' onClick={() => {onNavClick(id)}}>
      <p className="helvetica">{title}</p>
      <p className="helveticaBold">{date}</p>
    </div>
  </Link>);

export default DropdownItem;
