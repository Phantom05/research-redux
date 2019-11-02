import React, { Component } from 'react';
import RegisterTemplate from 'components/base/template/RegisterTemplate';
import RegisterContainer from 'containers/Autheticate/RegisterContainer/'

class Register extends Component {
  render() {
    return (
      <RegisterTemplate title="SIGN UP" align="center">
        <RegisterContainer />
      </RegisterTemplate>
    );
  }
}

export default Register;