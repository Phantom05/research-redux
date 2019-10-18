import React, { Component } from 'react';
import {connect} from 'react-redux';

class SettingContainer extends Component {
  handleClick = () =>{
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h2>Settings</h2>
        <button onClick={this.handleClick}>View Main</button>
      </div>
    );
  }
}

export default connect(
  ({setting})=>({

  })
)(SettingContainer);