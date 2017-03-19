/**
 * Created by ulrichsinn on 03/17/2017.
 */

import '../styles/main.scss';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavWide from './nav_wide';
import NavNarrow from './nav_narrow';


class NavContainer extends Component {
  
  render() {
    return (
      (!this.props.isNarrow) ?
        <div id="topnavContainer" className="topNavContainerBackground">
          <div id="topNavBackground"></div>
          <NavWide/>
        </div>
        :
        <div id="topnavContainerOuter">
          <div id="topnavContainer" >
            <div id="topNavBackground"></div>
            <NavNarrow/>
          
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isNarrow: state.isNarrow,
  };
};

export default connect(
  mapStateToProps,
)(NavContainer);

NavContainer.propTypes = {
  currentNavigation: React.PropTypes.array,
  actions: React.PropTypes.object,
  lang: React.PropTypes.string,
  isNarrow: React.PropTypes.bool,
};
