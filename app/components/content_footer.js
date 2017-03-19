/**
 * Created by ulrichsinn on 03/19/2017.
 */

import React from 'react';

const ContentFooter = ({text}) =>
  (<div className="contentFooter">{text}</div>);

ContentFooter.propTypes = {
  text: React.PropTypes.string,
};



export default ContentFooter;
