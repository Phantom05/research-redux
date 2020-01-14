import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AuthTemplate} from 'components/base/template';
import {SignUpForm} from 'components/common/form';
import {storage,keys} from 'lib/library'

function SignUpContainer(props) {
  const {auth:authReducer} = useSelector(state=>state);
  const {isAutheticated} = authReducer.signIn;

  useEffect(() => {
    if(isAutheticated){
      props.history.goBack()
    }
  }, [isAutheticated])


  if(storage.get(keys.token)){
    return null;
  }
  return (
    <AuthTemplate
      children={<SignUpForm />}
    />
  );
}

export default SignUpContainer;