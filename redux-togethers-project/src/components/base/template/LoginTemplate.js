import React, { Component } from 'react';
import styled from 'styled-components';
import AuthTemplate from 'components/base/template/AuthTemplate';

const Styled ={
  LoginTemplate:styled.div`
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
  `
}
class LoginTemplate extends Component {
  render() {
    const {children} = this.props;
    return (
      <Styled.LoginTemplate>
      <AuthTemplate {...this.props}>
        {children}
      </AuthTemplate>
      </Styled.LoginTemplate>
    );
  }
}

export default LoginTemplate;