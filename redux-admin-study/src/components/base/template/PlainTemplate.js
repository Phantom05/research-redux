import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';




const headerHight = '35px';
const Styled = {
  Header: styled.header`
    position:fixed;
    height:${headerHight};
    left:0;
    top:0;
    width:100%;
  `,
  Main: styled.main`
    padding-top:${props => props.header ? headerHight : 0};
    float:left;
  `,
  Body: createGlobalStyle`
    body{
      padding-top:${props => props.header ? headerHight : 0};
      padding-top:100px;
    }
  `,
  TemplateBox: styled.div`
    &:after{
      display:block;
      content:'';
      clear: both;
    }
  `
}

class PlainTemplate extends Component {
  render() {
    const { header, main } = this.props;
    return (
      <div>
        <Styled.Body  header={header && true} />
        <Styled.Header>{header}</Styled.Header>
        <Styled.TemplateBox className="template__box">
          <Styled.Main header={header && true}>{main}</Styled.Main>
        </Styled.TemplateBox>

      </div>
    );
  }
}

export default PlainTemplate;