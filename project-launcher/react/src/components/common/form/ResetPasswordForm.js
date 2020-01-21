import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

function ResetPasswordForm(props) {
  return (
    <Styled.ResetPasswordForm>
      <h1>ResetPasswordForm</h1>
      <Link to="/">Home</Link>
    </Styled.ResetPasswordForm>
  );
}

const Styled ={
  ResetPasswordForm:styled.div`
    h1{
      margin-bottom:5px;
    }
  `
}

export default ResetPasswordForm;