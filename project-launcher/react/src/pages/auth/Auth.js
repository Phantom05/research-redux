// import React,{ useState,useMemo,useCallback,useRef } from 'react';
import React  from 'react';
import { Switch, Route,withRouter } from 'react-router-dom';
import {SignOut} from 'components/base/helpers/auth';
import AuthSignIn from './AuthSignIn';
import AuthSignUp from './AuthSignUp';

function Auth(props){
  const {match} = props;
  return(
  <Switch>
     <Route path={`${match.path}/signin`} component={AuthSignIn} />
     <Route path={`${match.path}/signup`} component={AuthSignUp} />
     <Route path={`${match.path}/signout`} component={SignOut} />
  </Switch>)
}

export default withRouter(Auth);
