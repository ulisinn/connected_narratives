import React, {Component} from 'react';
import NavContainer from '../containers/nav_container';
import Header from '../components/header';

export default class Main extends Component {
  
  
  render() {
    return <div id="topNode">
      <Header></Header>
        <NavContainer></NavContainer>
      {this.props.children}
    </div>;
  }
}

Main.propTypes = {
  children: React.PropTypes.node,
};
