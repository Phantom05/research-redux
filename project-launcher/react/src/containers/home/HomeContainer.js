import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useLanding} from 'lib/utils';
import {storage,keys} from 'lib/library';

function HomeContainer({main,auth}) {
  const {auth:authReducer,base:baseReducer} = useSelector(state=>state);
  const {signIn} = authReducer;
  const {isAutheticated} = signIn
  console.log(signIn,'signIn');
  
  return (
    !baseReducer.landing &&
    <div>
      Home
      
      <div>
      {!isAutheticated && <Link to="/auth/signin">로그인</Link>}
      </div>
      <div>
      {!isAutheticated && <Link to="/auth/signup">회원가입</Link>}
      </div>
      <div>
        <Link to="/auth/signout">로그아웃</Link>
      </div>
    </div>
  );
}

export default HomeContainer;

// scss, stlyed-components

