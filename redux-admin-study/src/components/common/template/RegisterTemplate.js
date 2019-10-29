import React, { Component } from 'react';
import styled from 'styled-components';
import AuthTemplate from 'components/common/template/AuthTemplate';

class RegisterTemplate extends Component {
  render() {
    const Styled = {
      Register: styled.div`
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
        min-width:200px;
      `
    }
    const { children, title, align } = this.props;
    return (
      <Styled.Register>
        <AuthTemplate title={title}>
          {children}
        </AuthTemplate>
      </Styled.Register>
    );
  }
}

export default RegisterTemplate;