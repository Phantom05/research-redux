import React from 'react';
import { Link } from 'react-router-dom';

function SignUpForm(props) {
  return (
    <div>
      <Link to="/">Home으로 가기</Link>
      <Link to="/auth/signin">로그인 화면으로 가기</Link>
    </div>
  );
}

export default SignUpForm;