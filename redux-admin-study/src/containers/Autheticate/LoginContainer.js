import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter ,Redirect} from 'react-router-dom';
import Login from 'components/Login';
import { Actions } from 'store/actionCreators';
import {
  regPassword,
  regEmail,
  alertLogin} from 'utils';



class LoginContainer extends Component {
  state={
    email: "",
    password: "1234a1234a",
    remember:false,
  }
  handleSubmit = (e) => {
    const {failure} = this.props;
    e.preventDefault()
    const { email, password, remember } = this.state;

    if(!regEmail(email)){
      alert('Please check your email format.');
      return false;
    }
    if(!regPassword(password)){
      alert('Please check your Password format.');
      return false;
    }
    Actions.auth_login_request({ email, password,remember });

    console.log(failure,'failure');
    if(failure){
      alertLogin(failure)
    }
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
      isAutheticated,
      authLoginEmail,
      authLoginRemember,
      profile
    } = this.props;
    console.log(isAutheticated,'isAutheticated');
    


    return (
      <div>
        {isAutheticated && <Redirect to="/" />}
        pending : {JSON.stringify(pending)} <br/>
        isAutheticated : {JSON.stringify(isAutheticated)} <br/>
        authEmail :{JSON.stringify(authLoginEmail)} <br/>
        authRemember : {JSON.stringify(authLoginRemember)} <br/>
        profile : {JSON.stringify(profile)} <br/>
          <Login
            remember={remember}
            email={email}
            password={password}
            pending={pending}
            handleLogin={this.handleLogin}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />

      </div>
    );
  }
}
export default connect(
  ({ auth }) => ({
    profile:auth.profile,
    pending: auth.autheticate.pending,
    isAutheticated:auth.autheticate.isAutheticated,
    failure:auth.autheticate.failure,
    authLoginEmail:auth.authLoginEmail,
    authLoginRemember:auth.authLoginRemember,
  })
)(withRouter(LoginContainer));