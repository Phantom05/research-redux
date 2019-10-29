import React, { Component } from 'react';
import styled from 'styled-components';

const Styled ={
  AuthTemplate:styled.div`
    border:1px solid #ececec;
    padding:65px 45px;
    border-radius:5px;
    box-shadow:5px 4px 8px rgba(0,0,0,.2);
    & >h3{
      font-size:30px;
      font-weight:bold;
      margin-bottom:60px;
      text-align:${props => props.align || 'left'}
    }
  `
}
class AuthTemplate extends Component {
  render() {
    const {title,children} = this.props;
    return (
      <Styled.AuthTemplate {...this.props}>
          <h3>{title}</h3>
          <div>{children}</div>
      </Styled.AuthTemplate>
    );
  }
}

export default AuthTemplate;