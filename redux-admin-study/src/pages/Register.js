import React, { Component } from 'react';
import RegisterTemplate from 'components/common/template/RegisterTemplate';
import RegisterContainer from 'containers/Autheticate/RegisterContainer/'

class Register extends Component {
  render() {
    return (
      <RegisterTemplate title="SIGN UP">
        <RegisterContainer />
      </RegisterTemplate>
    );
  }
}

export default Register;