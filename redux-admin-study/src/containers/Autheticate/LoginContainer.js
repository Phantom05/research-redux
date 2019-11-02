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
    email: "test1@test.com",
    password: "1234a1234a",
    remember:false,
    isSubmitting:false
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, remember } = this.state;
    this.setState({ isSubmitting:true })
    if(!regEmail(email)){
      alert('Please check your email format.');
      this.setState({ isSubmitting:null })
      return false;
    }
    if(!regPassword(password)){
      alert('Please check your Password format.');
      this.setState({ isSubmitting:null })
      return false;
    }

    Actions.auth_login_request({ email, password,remember });
  }

  handleChange = (e) => {
    const [{ state }, { name, value }] = [this, e.target];
    this.setState({
      [name]: name === 'remember' ? !state.remember : value,
      isSubmitting:false
    });
  }
  componentDidMount() {
    const {authLoginEmail,authLoginRemember} = this.props;
    this.setState({
      email:authLoginEmail,
      remember:authLoginRemember
    })
  }
  UNSAFE_componentWillUpdate (nextProps,nextState){
    const {failure} = this.props;
    console.log(nextProps,'nextState');
    console.log(nextState);
    console.log(failure,'failure');

  }
  render() {
    
    const {email,password,remember,isSubmitting} = this.state;
    const {
      pending,
      isAutheticated,
      authLoginEmail,
      authLoginRemember,
      profile,
      failure
    } = this.props;

    if(failure && isSubmitting){
      alertLogin(failure)
    }

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