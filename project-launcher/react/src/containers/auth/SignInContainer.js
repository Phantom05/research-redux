import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AuthTemplate} from 'components/base/template';
import {SignInForm} from 'components/common/form';
import {PlainFooter} from 'components/common/footer';
import {regEmail,regPassword} from 'lib/library';
import {Toastify} from 'components/common/toastify';
import {AUTH_SIGNIN_SAGAS} from 'store/actions';
import {withRouter} from 'react-router-dom';
import {useImmer} from 'use-immer';
import {storage,keys} from 'lib/library';

// import {} from 'store/actionSagas';


function SignInContainer(props) {
  const {auth:authReducer} = useSelector(state=>state);
  const {pending,isAutheticated,authCount} = authReducer.signIn;
  const [vaild,setValid]  = useState({
    email:false,
    password:false,
  });
  const [value,setValue] = useImmer({
    email:null,
    password:null,
    remember:null
  });

  const handleSubmit=  ({type,email,password,remember})=>{
    if(type === 'user'){
      if(!regEmail(email) || !regPassword(password)){
        setValid({
          email:true,
          password:true
        });
      }else{
        setValid({
          email:false,
          password:false
        });
        if(remember){
          storage.set(keys.remember,email);
        }else{
          storage.remove(keys.remember);
        }
        AUTH_SIGNIN_SAGAS({email,password})
      }
    }else if (type === 'customer'){
      console.log('비회원 로그인');
    }
    
  };

  useEffect(() => {
    if(authCount >0 && !isAutheticated){
      setValid({
        email:true,
        password:true
      });
    }
  }, [authCount,isAutheticated])

  return (
    // !storage.get(keys.token) &&
    <AuthTemplate 
      footer={<PlainFooter />} >

      <SignInForm  
        onSubmit={handleSubmit} 
        error={vaild} 
        pending={pending}
        
      />
      <Toastify
        type="error"
        show={vaild.error|| vaild.password}
        text="아이디나 비밀번호를 확인해주세요."
      />
    </AuthTemplate>
  );
}

export default withRouter(SignInContainer);