import React from 'react';
import { Link } from 'react-router-dom';

function SignUpForm(props) {
  return (
    <div>
      <h1>Sign Up 페이지</h1>
      <Link to="/">Home으로 가기</Link>
      <Link to="/auth/signin">로그인 화면으로 가기</Link>
      <Link to="/auth/signout">로그아웃</Link>
    </div>
  );
}

export default SignUpForm;