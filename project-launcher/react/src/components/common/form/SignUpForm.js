import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SignUpForm(props) {
  return (
    <Styled.SignUpForm>
      <h1>SignUpForm</h1>
      <Link to="/">Home</Link>
    </Styled.SignUpForm>
  );
}

const Styled={
  SignUpForm:styled.div`
    h1{
      margin-bottom:5px;
    }
  `
}

export default SignUpForm;