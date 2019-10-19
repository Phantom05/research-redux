import React, { Component } from 'react';
import styled from 'styled-components';
import AuthTemplate from 'components/common/AuthForm/AuthTemplate';
import { Link } from 'react-router-dom';
import {SagaActions} from 'store/actionsCreators';

// import { connect } from "react-redux";
// import WithLogged from 'lib/hoc/WithLogged';

import { Input, Button, Checkbox } from 'antd';

const Styled = {
  Login: styled.div`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    .login__row{
      position:relative;
      margin-bottom:15px;
      width:300px;
      &.button{
        text-align:right;
        margin-top:40px;
      }
      &.signup{
        text-align:center;
        color:#afafaf;
      }
    }
    .link{
      display:inline-block;
      margin-right:5px;
      font-size:13px;
      &:hover{
        text-decoration:underline;
      }
      &:first-child:after{
        display:inline-block;
        content:'/';
        clear: both;
        margin:0 4px;
      }
     }
     .remember{
       position:absolute;
       left:0;
       top:70%;
       transform:translateY(-50%);
     }
     .login__btn{
       background:#4565ce;
       color:#fff;
       &:hover,&:focus{
         background:#3250b3;
         color:#fff;
       }
     }
  `
}

class Login extends Component {
  state = {
    email: '',
    password: '',
    remember: '',
    checkbox: false,
  }

  handleChange = (e) => {
    const { state } = this;
    const { name, value } = e.target;
    const {handleTest} = this.props;
    this.setState({
      [name]: name === 'checkbox' ? !state.checkbox : value
    });
    handleTest()
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    const {asyncSaga} = this.props;
    asyncSaga()
    // SagaActions.helloSaga()

  }

  render() {
    const { props, state, handleLogin, handleChange, handleSubmit } = this;
    // const { logged, email, password, remember } = props;
    return (
      <Styled.Login>
        {/* <WithLogged url="/" /> */}
        <AuthTemplate title="Admin" align="center" >
          <form onSubmit={handleSubmit}>
            <div className="login__row">
              <Input
                type="text"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
                autoComplete="off"
                name="email"
              />
            </div>
            <div className="login__row">
              <Input.Password
                type="text"
                placeholder="Password"
                autoComplete="off"
                onChange={handleChange}
                value={state.password}
                name="password"
              />
            </div>
            <div className="login__row button">
              <Checkbox
                onChange={handleChange}
                className="remember"
                checked={state.checkbox}
                name="checkbox"
              >Remember</Checkbox>
              <Link to="/reset" className="link">Forgot Password?</Link>
            </div>
            <div className="login__row login">
              <Button
                htmlType="submit"
                block
                onClick={handleLogin}
                className="login__btn"
              >Login</Button>
            </div>
            <div className="login__row signup">
              <Link to="/" className="link">Home</Link>
              <Link to="/register" className="link">Register</Link>
            </div>
          </form>
        </AuthTemplate>

      </Styled.Login>
    );
  }
}

export default Login;