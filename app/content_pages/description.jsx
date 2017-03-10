import '../styles/main.scss';

import React from 'react';

const Description = () => {
  return (<div id="description" className="contentWrapper">
    <div className="content">Description CONTENT</div>
  </div>);
};

Description.propTypes = {
  title: React.PropTypes.string,
};

export default Description;
