import React from 'react';
import styled from 'styled-components';
import { color } from 'styles/__utils';
import { icon_plus } from 'components/base/images';
import {PlainDim} from 'components/common/dim';
import { useImmer } from "use-immer";

function ExecutorNav(props) {
  const [value,setValue] = useImmer({
    dim:false
  });


  return (
    <Styled.ExecutorNav>
      {/* <PlainDim  view={value.dim} /> */}
      <div className="dim"></div>
      <div className="executor__menu_box" >
        <span className="menu__icon_con" >
          <div className="menu__icon_box">
            <img src={icon_plus} alt="icon_plus" className="menu__icon" />
          </div>
        </span>
      </div>
    </Styled.ExecutorNav>
  );
}

const Styled = {
  ExecutorNav: styled.div`
  width:100px;
  padding-top:20px;
  .executor__menu_box{
    text-align:center;
  }
    .menu__icon_con{
      position:relative;
      display:inline-block;
      width:60px;
      height:60px;
      border-radius:100%;
      background:${color.blue};
      cursor: pointer;
    }
    .menu__icon_box{
      display:inline-block;
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      font-size:37px;
      color:white;
    }
    .menu__icon{
      display:inline-block;
      width:100%;
      height:100%;
    }
  `
}

export default ExecutorNav;