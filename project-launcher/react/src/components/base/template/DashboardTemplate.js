import React, { useRef, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import {useImmer} from 'use-immer';
import cx from 'classnames';
import {device,color,font} from 'styles/__utils';

function getSize(target) {
  if (target) {
    const { clientWidth, clientHeight } = target;
    return { x: clientWidth, y: clientHeight }
  }
  return { x: null, y: null }
}

function DashboardTemplate({className,  nav, header, children,title,rightSpace }) {
  const navRef      = useRef();
  const headerRef   = useRef();
  const childrenRef = useRef();
  const rightSpaceRef = useRef();
  const [cSize, setCSize] = useImmer({
    header     : { x: null, y: null },
    nav        : { x: null, y: null },
    children   : { x: null, y: null },
    rightSpace : { x: null, y: null } 
  });
 
  useLayoutEffect(()=>{
    if(navRef.current){
      setCSize(draft=>{
        draft.header   = getSize(headerRef.current);
        draft.nav      = getSize(navRef.current);
        draft.children = getSize(childrenRef.current);
        draft.rightSpace = getSize(rightSpaceRef.current);
      })
    }
  },[]);

  return (
    <Styled.DashboardTemplate  {...cSize} bg={color.gray_dashboard}>
      {header &&
        <div className={cx('DashboardTemplate__header')} children={header} ref={headerRef} />}
      {nav &&
        <div className={cx('DashboardTemplate__nav')} children={nav} ref={navRef} />}
      {children && 
        <div className={cx('DashboardTemplate__main')} ref={childrenRef}>
            {title && <div className="DashboardTemplate__title">{title}</div>}
            {children && 
              <div bg={"white"} className={cx("DashboardTemplate__children")}>{children}</div>}
        </div>
      }
      {rightSpace && 
          <div className={cx("DashboardTemplate__rightSpace")} children={rightSpace} ref={rightSpaceRef} />}
      
    </Styled.DashboardTemplate>
  );
}

const Styled = {
  DashboardTemplate: styled.div`
  ${({bg})=> bg && `background:${bg}`};
  height:100vh;

  .DashboardTemplate__header{
      position:fixed;
      left:0;
      top:0;
      width:100%;
      z-index:50000
    }
    .DashboardTemplate__nav{
      z-index:50000;
      position:fixed;
      left:0;
      top:${({header})=>header.y ? header.y:0 }px;
      height:${({header})=>header.y ?`calc(100% - ${header.y}px)`:'100%' };
    }
    .DashboardTemplate__main{
      ${({header})=>header.y && `margin-top:${header.y}px; height:calc(100% - ${header.y}px)`}
      ${({nav,rightSpace})=>nav.x && `margin-left:${nav.x}px; width:calc(100% - ${(rightSpace.x?rightSpace.x:0) + nav.x +2}px)`};
      ${({rightSpace})=> `padding:${rightSpace.x?'30px 0 30px 30px':'30px'}`}
      &:after{
        display:block;
        content:"";
        clear: both;
      }
      height:100vh;
      float:left;
    }
    .DashboardTemplate__title{
      position:relative;
      background:white;
      margin-bottom:30px;
      padding:10px 20px;
      font-weight:600;
      ${font(18,color.black_font)};
      &:after{
        position:absolute;
        display:block;
        content:"";
        left:0;
        top:0;
        width:5px;
        height:100%;
        background:${color.blue_week};
      }
    }
    .DashboardTemplate__rightSpace{
      /* display:inline-block; */
      float:left;
    }
    .DashboardTemplate__children{
      border-radius:10px;
      box-shadow: 2px 2px 5px rgba(36, 53, 51, 0.2);
      padding:30px;
      width:100%;
      background:white;
    }
  `
}

export default DashboardTemplate;