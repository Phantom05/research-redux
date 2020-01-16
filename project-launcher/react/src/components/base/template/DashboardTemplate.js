import React, { useRef, useEffect, useLayoutEffect } from 'react';
import styled from 'styled-components';
import {useImmer} from 'use-immer';
import cx from 'classnames';
import {device} from 'styles/__utils';

function getSize(target) {
  if (target) {
    const { clientWidth, clientHeight } = target;
    return { x: clientWidth, y: clientHeight }
  }
  return { x: null, y: null }
}

function DashboardTemplate({  nav, header, children }) {
  const navRef = useRef();
  const headerRef = useRef();
  const childrenRef = useRef();
  

  const [cSize, setCSize] = useImmer({
    header   : { x: null, y: null },
    nav      : { x: null, y: null },
    children : { x: null, y: null },
  });


  useLayoutEffect(()=>{
    if(navRef.current){
      setCSize(draft=>{
        draft.header   = getSize(headerRef.current);
        draft.nav      = getSize(navRef.current);
        draft.children = getSize(childrenRef.current);
      })
    }
  },[])

  return (
    <Stlyed.DashboardTemplate {...cSize}>
      {header &&
        <div className={cx('DashboardTemplate__header')} children={header} ref={headerRef} />}
      {nav &&
        <div className={cx('DashboardTemplate__nav')} children={nav} ref={navRef} />}
      {children && 
        <div className={cx('DashboardTemplate__main')} children={children} ref={childrenRef} />
      }
    </Stlyed.DashboardTemplate>
  );
}

const Stlyed = {
  DashboardTemplate: styled.div`
    .DashboardTemplate__header{
      /* opacity:0; */
      &.load{
        opacity:1;
      }
      position:fixed;
      left:0;
      top:0;
      width:100%;
      z-index:50000
    }
    .DashboardTemplate__nav{
      /* opacity:0; */
      &.load{ 
        opacity:1;
      }
      z-index:50000;
      border:1px solid blue;
      position:fixed;
      left:0;
      top:${props=>props.header.y ?props.header.y:0 }px;
      height:${props=>props.header.y ?`calc(100% - ${props.header.y}px)`:'100%' };
    }
    .DashboardTemplate__main{
      /* opacity:0; */
      &.load{
        opacity:1;
        
      }
      ${props=>props.header.y && `padding-top:${props.header.y}px`}
      ${props=>props.nav.x && `padding-left:${props.nav.x}px`}
    }
  `
}

export default DashboardTemplate;