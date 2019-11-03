import React, { Component } from 'react';
import styled from 'styled-components';
import {color,floatClear} from 'styles/utils';

const Styled ={
  ThinScrollHeader:styled.div`
    position:sticky;
    top:0;
    left:0;
    background:${color.black};
    z-index:5000;
    color:${color.white};
    padding:5px;
  `
}
class ThinScrollHeader extends Component {
  
  render() {
    const {title} = this.props;
    return (
      <Styled.ThinScrollHeader>
        {title}
      </Styled.ThinScrollHeader>
    );
  }
}

export default ThinScrollHeader;