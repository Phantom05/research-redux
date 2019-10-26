import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from 'components/Login';
import {LoginTemplate} from 'components/common/template';
import { Actions } from 'store/actionCreators';
import { cookie, keys } from 'utils';
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
    const {authLoginEmail,authLoginRemember,isAutheticated} = this.props;
    const token = cookie.get(keys.user);

    if(token && !isAutheticated){
      console.log('토큰은 있는데 리듀서 새로고침해서 isAutheticated가 없을떄');
      Actions.auth_token_request(token);

    }

    this.setState({
      email:authLoginEmail,
      remember:authLoginRemember
    })
  }
  render() {
    const {email,password,remember} = this.state;
    const {
      logged,
      pending,
      response,
      isAutheticated,
      authLoginEmail,
      authLoginRemember
    } = this.props;
    return (
      <div>
        pending : {JSON.stringify(pending)} <br/>
        isAutheticated : {JSON.stringify(isAutheticated)} <br/>
        authEmail :{JSON.stringify(authLoginEmail)} <br/>
        authRemember : {JSON.stringify(authLoginRemember)} <br/>
        <LoginTemplate title="Admin" align="center">
          <Login
            remember={remember}
            email={email}
            password={password}
            logged={logged}
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
    logged: auth.logged,
    pending: auth.pending,
    response: auth.response,
    isAutheticated:auth.isAutheticated,
    authLoginEmail:auth.authLoginEmail,
    authLoginRemember:auth.authLoginRemember
  })
)(LoginContainer);