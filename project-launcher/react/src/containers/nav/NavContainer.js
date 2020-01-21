import React from 'react';
import {useSelector} from 'react-redux';
import {DashboardNav,ExecutorNav} from 'components/common/nav';
import {Actions} from 'store/actionCreators';

import {withRouter} from 'react-router-dom';

function NavContainer(props) {
  const {type} = props;
  const commonSelector = useSelector(state=>state.common);
  const { executorNav } = commonSelector;

  const typeObj ={
    "dashboard":DashboardNav,
    "executor":ExecutorNav
  }

  const handleToggle =()=>{
    Actions.common_executor_nav();
  }

  const Nav = typeObj[type];
  if(!Nav) return null;
  return (
    <Nav 
      isOpen={executorNav.isOpen}
      handleToggle={handleToggle}
    />
  );
}

export default withRouter(NavContainer);