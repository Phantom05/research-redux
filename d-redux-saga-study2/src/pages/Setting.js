import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Setting extends Component {
  render() {
    return (
      <div>
        <h2>Setting</h2> 
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Setting;