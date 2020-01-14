// import React,{ useState,useMemo,useCallback,useRef } from 'react';
import React  from 'react';
import { Switch, Route,withRouter } from 'react-router-dom';
import SignInContainer from 'containers/auth/SignInContainer';
import SignUpContainer from 'containers/auth/SignUpContainer';
import {SignOut} from 'components/base/helpers/auth';

function Auth(props){
  const {match} = props;
  return(
  <Switch>
     <Route path={`${match.path}/signin`} component={SignInContainer} />
     <Route path={`${match.path}/signup`} component={SignUpContainer} />
     <Route path={`${match.path}/signout`} component={SignOut} />
  </Switch>)
}

export default withRouter(Auth);
