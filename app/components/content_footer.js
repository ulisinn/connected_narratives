/**
 * Created by ulrichsinn on 03/19/2017.
 */

import React from 'react';

const ContentFooter = ({text,
                       margin = 0}) =>
  (<div className="contentFooter" style={{margin}}>{text}</div>);

ContentFooter.propTypes = {
  text: React.PropTypes.string,
  margin: React.PropTypes.number,
};



export default ContentFooter;
