import React,{useState} from 'react';
import {AuthTemplate} from 'components/base/template';
import {SignInForm} from 'components/common/form';
import {PlainFooter} from 'components/common/footer';
import {regEmail,regPassword} from 'lib/library';
import {Toastify} from 'components/common/toastify';

function SignInContainer(props) {
  const [value,setValue]  = useState({
    email:false,
    password:false,
  })
  const handleSubmit= ({email,password})=>{
    if(!regEmail(email) || !regPassword(password)){
      console.log(`아이디나 비밀번호를 확인해주세요.`)
      setValue({
        email:true,
        password:true
      });
    }else{
      console.log(`Saga 통신`);
      setValue({
        email:false,
        password:false
      });
    }
  }
  return (
    <AuthTemplate  footer={<PlainFooter />} >
      <SignInForm  onSubmit={handleSubmit} error={value} />
      <Toastify
        type="error"
        show={value.error|| value.password}
        text="아이디나 비밀번호를 확인해주세요."
      />
    </AuthTemplate>
  );
}

export default SignInContainer;