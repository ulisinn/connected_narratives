import '../styles/main.scss';

import React from 'react';

const Goals = () => {
  return (<div id="goals" className="contentWrapper">
    <div className="content">Goals CONTENT</div></div>);
};

Goals.propTypes = {
  title: React.PropTypes.string,
};

export default Goals;
