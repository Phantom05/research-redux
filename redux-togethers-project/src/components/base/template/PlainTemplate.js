import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';




const headerWidth = '250px';
const Styled = {
  Header: styled.header`
    position:fixed;
    height:100vh;
    left:0;
    top:0;
    width:${headerWidth};
  `,
  Main: styled.main`
    padding-left:${props => props.header ? headerWidth : 0};
    float:left;
    width:100%;
  `,
  Body: createGlobalStyle`
    body{
      padding-left:${props => props.header ? headerWidth : 0};
      /* padding-top:100px; */
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