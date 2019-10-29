import React, { memo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Input, Button, Checkbox, Icon } from 'antd';

const Styled = {
  Login: styled.div`
    .login__row{
      position:relative;
      margin-bottom:15px;
      min-width:300px;
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
  `,
  Loading: styled.div`
    position:absolute;
    right:10px;
    top:10px;
    color:#0039f5;
  `
}
const Login = ({
  pending,
  email,
  password,
  remember,
  handleChange,
  handleSubmit
}) => (
    <>
      <Styled.Login>
          <form onSubmit={handleSubmit}>
            <div className="login__row">
              <Input
                type="text"
                placeholder="Email"
                value={email}
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
                value={password}
                name="password"
              /> 
            </div>
            <div className="login__row button">
              <Checkbox
                onChange={handleChange}
                className="remember"
                checked={remember}
                name="remember"
                children={'Remember'}
              />
              <Link to="/reset" className="link">Forgot Password?</Link>
            </div>
            <div className="login__row login">
              <Button
                htmlType="submit"
                block
                className="login__btn"
                children={'Login'}
              />
            </div>
            <div className="login__row signup">
              <Link to="/" className="link">Home</Link>
              <Link to="/register" className="link">Register</Link>
            </div>
          </form>
      </Styled.Login>
      {pending && <Styled.Loading ><Icon type="loading" /></Styled.Loading>}
    </>
  )

export default memo(Login);