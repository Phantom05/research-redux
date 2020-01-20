import React,{useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AuthTemplate} from 'components/base/template';
import {SignUpForm} from 'components/common/form';
import {storage,keys} from 'lib/library'

function SignUpContainer(props) {
  const {auth:authReducer} = useSelector(state=>state);
  const {isAutheticated} = authReducer.signIn;

  //use Effect 있을땐 storage로
  useEffect(() => {
    if(isAutheticated){
      props.history.goBack()
    }
  }, [isAutheticated])

  return (
    <SignUpForm />
  );
}

export default SignUpContainer;