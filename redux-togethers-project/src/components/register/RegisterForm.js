import React, { PureComponent } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import {  Input,  Spin, Icon  } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 13 }} spin />;
const Styled = {
  RegisterForm: styled.form`
    min-width:350px;
    font-family:'antialiased';
    .register__row{
      margin-bottom:15px;
      &.create{
        margin:25px 0;
      }
      &.info{
        text-align:center;
        font-size:14px;
      }
      &.policy{
        text-align:center;
        font-size:12px;
        border-bottom:1px solid #ececec;
        padding-bottom:20px;
      }
    }
    .policy_tx{
      color:#1890ff;
    }
    .submit__btn{
      position:relative;
      border:0;
      width:100%;
      padding:7px;
      font-size:14px;
      background:#4565ce;
      color:#fff;
      cursor: pointer;
    }
    .ant-spin{
      position:absolute;
      right:5%;
      top:50%;
      transform:translateY(-50%);
      color:#fff
    }
  `
}

class RegisterForm extends PureComponent {
  render() {
    const {
      email,
      password,
      confirmPassword,
      username,
      onChange,
      onSubmit,
      pending
    } = this.props;
    return (
      <Styled.RegisterForm onSubmit={onSubmit}>

        <div className={cx('register__row')}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={onChange}
            name="username"
            autoComplete="off"
          />
        </div>
        <div className={cx('register__row')}>
          <Input
            type="text"
            placeholder="Example@email.com"
            value={email}
            onChange={onChange}
            name="email"
            autoComplete="off"
          />
        </div>
        <div className={cx('register__row')}>
          <Input.Password
            type="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            name="password"
          />
        </div>
        <div className={cx('register__row')}>
          <Input.Password
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={onChange}
            name="confirmPassword"
          />
        </div>
        <div className={cx('register__row create')}>
          <button 
            className={cx('submit__btn')} 
            type="submit"
          >Create an Account {pending && <Spin indicator={antIcon} />}
          </button>

        </div>
        {/* <div className={cx('register__row policy')}>
          By Clicking th Sign Up Button, you agree to out <br/>
          <span 
            onClick={openTermNoti}
            className={cx('policy_tx')}
          > Terms &#38; Conditions</span>, and 
          <span
            onClick={openPolicyNoti}
            className={cx('policy_tx')}
          >
            Privacy Policy
          </span>
        </div> */}
        <div className={cx('register__row info')}>
          Aleady have an account? <Link to="/login">Login here</Link>
        </div>
      </Styled.RegisterForm>
    );
  }
}

export default RegisterForm;


