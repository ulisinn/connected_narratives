import '../styles/main.scss';

import React from 'react';

const BiomusicAesthetics = () => {
  return (<div id="biomusic_aesthetics" className="contentWrapper">
    <div className="content">BiomusicAesthetics CONTENT</div>
  </div>);
};

BiomusicAesthetics.propTypes = {
  title: React.PropTypes.string,
};

export default BiomusicAesthetics;
