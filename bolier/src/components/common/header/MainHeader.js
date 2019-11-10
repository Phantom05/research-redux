import React, { Component } from 'react';
import styled from 'styled-components';
import { color,positionCenterCenter } from 'styles/utils';
import cx from 'classnames';

const Styled = {
  Header: styled.header`
    /* position:relative; */
    background:white;
    border-bottom:2px solid ${color.borderGray2};
    padding:5px;
    height:70px;
    .header{
      ${positionCenterCenter};
      width:95%; 
    }
  `
}
class MainHeader extends Component {
  render() {
    return (
      <Styled.Header>
        <div className={cx('header')}>
          Main Header
        </div>
      </Styled.Header>
    );
  }
}

export default MainHeader;