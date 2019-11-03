import React, { Component } from 'react';
import styled from 'styled-components';

const headerHight = '60px';
const Styled = {
  Header:styled.header`
    position:fixed;
    height:${headerHight};
    left:0;
    top:0;
    width:100%;
  `,
  SideBar:styled.div`
    padding-top:${props => props.header ? headerHight:0};
    float:left;
  `,
  Main:styled.main`
    padding-top:${props => props.header ? headerHight:0};
    float:left;
  `,
  TemplateBox:styled.div`
    &:after{
      display:block;
      content:'';
      clear: both;
    }
  `
}

class PlainTemplate extends Component {
  render() {
    const {header, main,sidebar} = this.props;
    return (
      <div>
        <Styled.Header>{header}</Styled.Header>
        <Styled.TemplateBox className="template__box">
          <Styled.SideBar header={header &&true}>{sidebar}</Styled.SideBar>
          <Styled.Main header={header&& true} sidebar={sidebar&& true}>{main}</Styled.Main>
        </Styled.TemplateBox>

      </div>
    );
  }
}

export default PlainTemplate;