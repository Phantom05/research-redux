import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';


function getSize(target) {
  if (target) {
    const { clientWidth, clientHeight } = target;
    return { x: clientWidth, y: clientHeight }
  }
  return { x: null, y: null }
}

function DashboardTemplate({ nav, header, children }) {
  const navRef = useRef();
  const headerRef = useRef();
  const childrenRef = useRef();
  const [cSize, setCSize] = useState({
    header   : { x: null, y: null },
    nav      : { x: null, y: null },
    children : { x: null, y: null },
  });
  useEffect(() => {
    setCSize({
      header   : getSize(headerRef.current),
      nav      : getSize(navRef.current),
      children : getSize(childrenRef.current),
    });
    console.log('허');
  }, []);
  console.log('ren');
  return (
    <Stlyed.DashboardTemplate {...cSize}>
      {header &&
        <div className="DashboardTemplate__header" children={header} ref={headerRef} />}
      {nav &&
        <div className="DashboardTemplate__nav" children={nav} ref={navRef} />}
      <div className="DashboardTemplate__main" children={children} ref={childrenRef} />
    </Stlyed.DashboardTemplate>
  );
}

const Stlyed = {
  DashboardTemplate: styled.div`
    .DashboardTemplate__header{
      position:fixed;
      left:0;
      top:0;
      width:100%;
    }
    .DashboardTemplate__nav{
      border:1px solid blue;
      position:fixed;
      left:0;
      top:${props=>props.header.y ?props.header.y:0 }px;
      height:${props=>props.header.y ?`calc(100% - ${props.header.y}px)`:'100%' };
    }
    .DashboardTemplate__main{
      ${props=>props.header.y && `padding-top:${props.header.y}px`}
      ${props=>props.nav.x && `padding-left:${props.nav.x}px`}
    }
  `
}

export default DashboardTemplate;