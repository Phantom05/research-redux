import React, { useEffect , useCallback} from 'react';
import { useSelector } from 'react-redux';
import { SignInForm } from 'components/common/form';
import { regEmail, regPassword } from 'lib/library';
import { Toastify } from 'components/common/toastify';
import { AUTH_SIGNIN_SAGAS } from 'store/actions';
import { withRouter } from 'react-router-dom';
import { storage, keys } from 'lib/library';
import { useImmer } from 'use-immer';


// import {  ToastContainer } from 'react-toastify';
 

function SignInContainer() {
  const { auth: authReducer } = useSelector(state => state);
  const { pending, isAutheticated, authCount } = authReducer.signIn;
  const [vaild, setValid] = useImmer({
    email: false,
    password: false,
    remember:null,
    auto:null,
  });

  const handleSubmit = useCallback(({ type, email, password, remember,auto }) => {
    if (type === 'user') {      
      if (!regEmail(email) || !regPassword(password)) { // 정규식 불통과
        setValid(draft=>{
          draft.email = false;
          draft.password = false;
        });
        setValid(draft=>{
          if(!regEmail(email)) draft.email = true;
          if(!regPassword(password)) draft.password = true;
        });

      } else { //정규식 통과
        setValid(draft=>{
            draft.email = false;
            draft.password = false
        });

        if (remember) {
          storage.set(keys.remember, email);
        } else {
          storage.remove(keys.remember);
        }

        if(auto){
          storage.set(keys.autoLogin, auto);
        }else{
          storage.remove(keys.autoLogin);
        }
        console.log("SD@@@@!!!!", auto);
        AUTH_SIGNIN_SAGAS({ email, password, auto })
      }
    } else if (type === 'customer') {
      AUTH_SIGNIN_SAGAS({email:'customer'})
      console.log('비회원 로그인');
    }

  },[setValid]);
  
  const initialize =useCallback(()=>{
    if (authCount > 0 && !isAutheticated) {
      setValid(draft=>{
          draft.email = true;
          draft.password = true;
      });
    }
  }) 

  useEffect(() => {
    initialize();
  }, [authCount, isAutheticated,setValid,initialize]);




  
  return (
    <>
      <SignInForm
        onSubmit={handleSubmit}
        error={vaild}
        pending={pending}
      />
      <Toastify
        type="error"
        show={vaild.error || vaild.password}
        text="아이디나 비밀번호를 확인해주세요."
      />
    </>
  );
}

export default withRouter(SignInContainer);