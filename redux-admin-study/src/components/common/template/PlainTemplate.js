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
  Main:styled.main`
    padding-top:${headerHight};
  `
}

class PlainTemplate extends Component {
  render() {
    const {header, children} = this.props;
    return (
      <div>
        <Styled.Header>{header}</Styled.Header>
        <Styled.Main>{children}</Styled.Main>
      </div>
    );
  }
}

export default PlainTemplate;