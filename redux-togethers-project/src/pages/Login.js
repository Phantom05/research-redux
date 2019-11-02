import React, { Component } from 'react';
import LoginContainer from 'containers/autheticate/LoginContainer';
import {LoginTemplate} from 'components/base/template';
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