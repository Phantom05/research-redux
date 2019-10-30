import React, { Component } from 'react';
import { connect } from 'react-redux';
import { regEmail } from 'utils';
import { RegisterForm } from 'components/register';
import {Actions} from 'store/actionCreators';
import {Redirect} from 'react-router-dom';


class RegisterContainer extends Component {
  state = {
    email: 'admin@admin.com',
    password: '1234a1234a',
    confirmPassword: '1234a1234a',
    username: '이쯔녕'
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const {email,password,confirmPassword,username} = this.state;
    Actions.auth_register_request({email,password,confirmPassword,username})
    
  }
  handleChange = (e) => {

    const { value, name } = e.target;
    this.setState({
      [name]: value
    })

  }
  render() {
    const { email, password, confirmPassword, username } = this.state;
    const {pending,success} = this.props.register;
    return (
      <>
      {success && <Redirect to="/"/>}
      <RegisterForm
        username={username}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        pending ={pending}
        
      />
      </>
    );
  }
}

export default connect(
  ({ auth }) => ({
    register:auth.register
  })
)(RegisterContainer);