/**
 * Created by ulrichsinn on 03/19/2017.
 */


import React from 'react';

const ContentHeader = ({text}) =>
  (<div className="contentHeader">{text}</div>);

ContentHeader.propTypes = {
  text: React.PropTypes.string,
};



export default ContentHeader;
