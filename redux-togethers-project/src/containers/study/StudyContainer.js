import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import HalfTemplate from 'components/base/template/HalfTemplate';

class StudyContainer extends Component {
  render() {
    return (
      <div>
        <HalfTemplate 
          left={'Hello'}
          right={'React'}
        />
      </div>
    );
  }
}

export default connect(
  (state)=>({

  })
)(withRouter(StudyContainer));