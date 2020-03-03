import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {storage,keys} from 'lib/library';
import {withRouter,Redirect} from 'react-router-dom';
import {AUTH_LOGOUT_SAGAS} from 'store/actions';
// import {Actions} from 'store/actionCreators'

function Logout(props) {
  const {pending, success,failure} = useSelector(state=>state.auth.logout)
  useEffect(()=>{
    AUTH_LOGOUT_SAGAS()
  },[]);
  if(pending){

  }
  if(success){
    // storage.clear();
    storage.remove(keys.token);
    storage.remove(keys.autoLogin);
    // props.history.goBack()
    return <Redirect to="/"/>
  }
  if(failure){

  }
  return null;
}

export default withRouter(Logout);