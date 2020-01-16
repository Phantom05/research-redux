import React,{useEffect} from 'react';
import {DashboardNav} from 'components/common/nav';
import {DashboardTemplate} from 'components/base/template';
import {useImmer} from 'use-immer';


function HomeContainer() {
  return (
    <DashboardTemplate 
      nav={<DashboardNav left={100}/>} 
    >
      <h2>Home Page</h2>
    </DashboardTemplate>
  );
}

export default HomeContainer

