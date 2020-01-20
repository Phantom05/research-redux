import React from 'react';
import {DashboardNav,ExecutorNav} from 'components/common/nav';

import {withRouter} from 'react-router-dom';

function NavContainer(props) {
  const {type} = props;

  const typeObj ={
    "dashboard":DashboardNav,
    "executor":ExecutorNav
  }
  const Nav = typeObj[type];
  console.log(Nav,'Nav');
  if(!Nav) return null;
  return (
    <Nav />
  );
}

export default withRouter(NavContainer);