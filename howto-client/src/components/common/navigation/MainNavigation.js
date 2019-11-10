import React, { Component } from 'react';
import styled from 'styled-components';
import { color,positionCenterCenter } from 'styles/utils';
import cx from 'classnames';

const Styled ={
  Navigation:styled.nav`
    background:white;
    width:200px;
    border-right:1px solid ${color.borderGray2};
    height:100%;
    .navigation{
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
    }
  `
}
class MainNavigation extends Component {
  render() {
    return (
      <Styled.Navigation>
        <div className={cx('navigation')}>
          MainNavigation
        </div>
           
      </Styled.Navigation>
    );
  }
}

export default MainNavigation;