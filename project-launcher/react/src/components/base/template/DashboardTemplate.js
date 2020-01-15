import React from 'react';
import styled from 'styled-components';

function DashboardTemplate({nav,header,children}) {
  return (
    <Stlyed.DashboardTemplate>
      {header && 
        <div className="DashboardTemplate__header" children={header}/>}
      {nav && 
        <div className="DashboardTemplate__nav" children={nav} />}
      <div className="DashboardTemplate__main" children={children} />
    </Stlyed.DashboardTemplate>
  );
}

const Stlyed ={
  DashboardTemplate:styled.div`
  .DashboardTemplate__header{
  
  }
    .DashboardTemplate__nav{
      border:1px solid blue;
      position:fixed;
      left:0;
      top:0;
      height:100%;
    }
    .DashboardTemplate__main{

    }
  `
}

export default DashboardTemplate;