import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class Core extends Component {
  render() {
    return (
      <div>
        Core
      </div>
    );
  }
}

export default connect(
  (state)=>({
    
  })
)(withRouter(Core));