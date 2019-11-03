import React, { Component } from 'react';
import styled from 'styled-components';

const Styled ={
  PlainWriteTemplate:styled.div`

  `
}

class PlainWriteTemplate extends Component {
  render() {
    const { children } = this.props;
    return (
      <Styled.PlainWriteTemplate>
        {children}
      </Styled.PlainWriteTemplate>
    );
  }
}

export default PlainWriteTemplate;