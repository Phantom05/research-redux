import React, { Component } from 'react';
import LoginContainer from 'containers/Autheticate/LoginContainer';
import {LoginTemplate} from 'components/common/template';
class Login extends Component {
  render() {
    return (
      <div>
        <LoginTemplate title="Admin" align="center">
          <LoginContainer />
        </LoginTemplate>
      </div>
    );
  }
}

export default Login;