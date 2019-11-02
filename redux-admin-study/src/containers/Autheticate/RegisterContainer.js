import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RegisterForm } from 'components/register';
import {Actions} from 'store/actionCreators';
import {Redirect} from 'react-router-dom';
import { regEmail,regPassword,regUsername,alertRegister } from 'utils';


class RegisterContainer extends Component {
  state = {
    email: 'test1@test.com',
    password: '1234a1234a',
    confirmPassword: '1234a1234a',
    username: '1234a1234a',
    isSubmitting:false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
    const {email,password,confirmPassword,username} = this.state;
    console.log(email);
    this.setState({isSubmitting:true})
    if(!regUsername(username)){
      alert('이름을 확인해주세요.')
      return;
    }
    if(!regEmail(email)){
      alert('이메일 형식을 확인해주세요.');
      return;
    }
    if(!regPassword(password)){
      alert('비밀번호를 확인해주세요.');
      return;
    }
    if(password !== confirmPassword){
      alert('Confirm 비밀번호를 확인해주세요.')
      return;
    }
    Actions.auth_register_request({email,password,confirmPassword,username});
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      isSubmitting:false
    })

  }
  render() {
    const { email, password, confirmPassword, username,isSubmitting } = this.state;
    const {pending,success,failure} = this.props.register;
    if(failure && isSubmitting){
      console.log(failure,'failurefailure');
      alertRegister(failure);
    }
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