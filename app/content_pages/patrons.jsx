import '../styles/main.scss';

import React from 'react';

const Patrons = () => {
  return (<div id="patrons" className="contentFull">
    <div id="patronsWrapper">
      <div id="patronsHeader">
        <div id="patronsTitle">PATRONS & FUNDERS</div>
      </div>
      <div id="patronsLogos">
        <div id="mc_gill" className="logo"></div>
        <div id="museum_fine_arts" className="logo"></div>
        <div id="cirmmt" className="logo"></div>
        <div id="le_salon" className="logo"></div>
      </div>
    </div>
  </div>);
};

Patrons.propTypes = {
  title: React.PropTypes.string,
};

export default Patrons;
