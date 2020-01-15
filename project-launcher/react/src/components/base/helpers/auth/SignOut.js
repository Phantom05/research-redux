import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {storage} from 'lib/library';
import {Actions} from 'store/actionCreators'
import {withRouter,Redirect} from 'react-router-dom';

function SignOut(props) {
  const {pending, success,failure} = useSelector(state=>state.auth.signOut)
  useEffect(()=>{
    Actions.auth_signout_request();
  },[]);
  if(pending){

  }
  if(success){
    storage.clear();
    // props.history.goBack()
    return <Redirect to="/"/>
  }
  if(failure){

  }
  return null;
}

export default withRouter(SignOut);