import React, { Component } from 'react';
import SettingContainer from 'containers/SettingContainer';

class Setting extends Component {
  render() {
    const {props} = this;
    return (
      <div>
        <SettingContainer {...props}/>
      </div>
    );
  }
}

export default Setting;