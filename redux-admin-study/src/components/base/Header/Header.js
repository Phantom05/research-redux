import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import {
  positionHeightCenter,
  font
} from 'styles/utils';

console.log(positionHeightCenter);

const Styled = {
  Header: styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background: #000;
  color:#fff;
  & > button{
    cursor: pointer;
  }
  .logo{
    ${positionHeightCenter};
    left:10px;
    color:#fff;
  }
  .auth__box{
    ${positionHeightCenter};
    ${font}
    right:0;
  }
  `
}
class Header extends Component {
  render() {
    const { isAutheticated, handleLogout } = this.props;
    console.log(isAutheticated, 'header isAutheticated');
    return (
      <Styled.Header>

        <h2 className={cx('logo')}>Togethers</h2>
        <div className={cx('auth__box')}>
          {isAutheticated
            ? <button onClick={handleLogout}>Logout</button>
            : <div>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>}
        </div>

      </Styled.Header>
    );
  }
}

export default Header;