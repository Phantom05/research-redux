import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {
  floatClear,
  positionHeightCenter} from 'styles/__utils';

function PlainFooter(props) {
  return (
    <Styled.Footer>
      <div className="footer__con">
        <div className="footer__box">
          <Link to="/">이용 약관</Link>
        </div>
        <div className="footer__box">
          <Link to="/">개인정보 처리방침</Link>
        </div>
        <div className="footer__box">
          Copyright © DOF Inc. All rights reserved.
        </div>
      </div>
      
    </Styled.Footer>
  );
}

const Styled={
  Footer:styled.div`
    font-size:14px;
    color:#777;
    .footer__con{
      ${floatClear}
    }
    .footer__box{
      position: relative;
      float:left;
      margin-right:10px;
      padding-right:10px;
      &:after{
        ${positionHeightCenter}
        content:'';
        width:1px;
        height:14px;
        right:0;
        background:#C4C4C4;
      }
      &:last-child{
        margin-right:0;
        padding-right:0;
      }
      &:last-child:after{
        display:none
      }
    }
  `
}

export default PlainFooter;