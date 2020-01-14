import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AuthTemplate} from 'components/base/template';
import {SignInForm} from 'components/common/form';
import {PlainFooter} from 'components/common/footer';
import {regEmail,regPassword} from 'lib/library';
import {Toastify} from 'components/common/toastify';
import {Actions} from 'store/actionCreators';
import {withRouter} from 'react-router-dom';
import {storage,keys} from 'lib/library';


function SignInContainer(props) {
  const {auth:authReducer} = useSelector(state=>state);
  const {pending,isAutheticated,authCount} = authReducer.signIn;
  const [value,setValue]  = useState({
    email:false,
    password:false,
  });
  const handleSubmit=  ({email,password})=>{
    if(!regEmail(email) || !regPassword(password)){
      setValue({
        email:true,
        password:true
      });
    }else{
      setValue({
        email:false,
        password:false
      });
      Actions.auth_signin_request({email,password});
    }
  };

  useEffect(() => {
    if(authCount >0 && !isAutheticated){
      setValue({
        email:true,
        password:true
      });
    }
    if(isAutheticated){
      props.history.goBack()
    }
  }, [authCount,isAutheticated])

  return (
    !storage.get(keys.token) &&
    <AuthTemplate 
      footer={<PlainFooter />} >

      <SignInForm  
        onSubmit={handleSubmit} 
        error={value} 
        pending={pending} 
      />
      <Toastify
        type="error"
        show={value.error|| value.password}
        text="아이디나 비밀번호를 확인해주세요."
      />
    </AuthTemplate>
  );
}

export default withRouter(SignInContainer);