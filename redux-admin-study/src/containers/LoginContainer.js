import React, { Component } from 'react';
import {connect} from 'react-redux';
import Login from 'components/Login';
import {AuthActions} from 'store/actionsCreators';


class LoginContainer extends Component {
  handleTest = () =>{
    AuthActions.logged()
  }
  render() {
    const {
      logged,
      email,
      password,
      remember,
    } = this.props;
    return (
      <div>
        <Login 
          logged={logged}
          email={email}
          password={password}
          remember={remember}
          handleTest ={this.handleTest}
        />
      </div>
    );
  }
}
export default connect(
  ({auth})=>({
    logged:auth.logged,
    email:auth.email,
    password:auth.password,
    remember:auth.remember,
  })
)(LoginContainer);