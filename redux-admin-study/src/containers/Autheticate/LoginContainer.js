import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter ,Redirect} from 'react-router-dom';
import Login from 'components/Login';
import {LoginTemplate} from 'components/common/template';
import { Actions } from 'store/actionCreators';
import * as utils from 'utils';

class LoginContainer extends Component {
  state={
    email: "",
    password: "1234a1234a",
    remember:false,
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, remember } = this.state;

    if(!utils.regEmail(email)){
      alert('Please check your email format.');
      return false;
    }
    if(!utils.regPassword(password)){
      alert('Please check your Password format.');
      return false;
    }
    Actions.auth_login_request({ email, password,remember });
  }

  handleChange = (e) => {
    const [{ state }, { name, value }] = [this, e.target];
    this.setState({
      [name]: name === 'remember' ? !state.remember : value
    });
  }
  componentDidMount() {
    const {authLoginEmail,authLoginRemember} = this.props;
    this.setState({
      email:authLoginEmail,
      remember:authLoginRemember
    })
  }
  render() {
    
    const {email,password,remember} = this.state;
    const {
      pending,
      response,
      isAutheticated,
      authLoginEmail,
      authLoginRemember,
      profile
    } = this.props;

    return (
      <div>
        {isAutheticated && <Redirect to="/" />}
        pending : {JSON.stringify(pending)} <br/>
        isAutheticated : {JSON.stringify(isAutheticated)} <br/>
        authEmail :{JSON.stringify(authLoginEmail)} <br/>
        authRemember : {JSON.stringify(authLoginRemember)} <br/>
        profile : {JSON.stringify(profile)} <br/>
        <LoginTemplate title="Admin" align="center">
          <Login
            remember={remember}
            email={email}
            password={password}
            pending={pending}
            response={response}
            handleLogin={this.handleLogin}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </LoginTemplate>
      </div>
    );
  }
}
export default connect(
  ({ auth }) => ({
    pending: auth.pending,
    response: auth.response,
    isAutheticated:auth.isAutheticated,
    authLoginEmail:auth.authLoginEmail,
    authLoginRemember:auth.authLoginRemember,
    profile:auth.profile
  })
)(withRouter(LoginContainer));