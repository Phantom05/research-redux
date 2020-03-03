import React from 'react';
import {useSelector} from 'react-redux';
import {DashboardNav,ExecutorNav} from 'components/common/nav';
import {withRouter} from 'react-router-dom';
// import {Actions} from 'store/actionCreators';

function NavContainer(props) {
  const {type} = props;
  const { 
    auth: authReducer,
    common:commonSelector,
    base:baseReducer 
  } = useSelector(state=>state);
  const { executorNav } = commonSelector;
  const {signIn} = authReducer;

  
  const typeObj ={
    "dashboard":DashboardNav,
    "executor":ExecutorNav
  }

  // const handleToggle =()=>{
  //   Actions.common_executor_nav();
  // }
  


  const Nav = typeObj[type];
  if(!Nav) return null;
  return (
    <Nav 
      auth={authReducer}
      info={baseReducer}
      profile={signIn.profile}
      // handleToggle={handleToggle}
    />
  );
}

export default withRouter(NavContainer);