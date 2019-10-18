import React, { Component } from 'react';
import styled from 'styled-components';

const Styled = {
  Window:styled.div`
    position:fixed;
    width:100%;
    top:0;
    left:0;
    height:40px;
    background:black;
    color:#fff;
  `,
  Stage:styled.div`
    position:fixed;
    width:calc(100% - 200px);
    left:200px;
    border:1px solid red;
    top:40px;
    height:120px;
  `,
  Navigation:styled.div`
    position:fixed;
    width:200px;
    height: calc(100vh - 40px);
    left:0;
    top:40px;
    border:1px solid red;
  `,
  Controller:styled.div`
    position:fixed;
    width:calc(100% - 200px);
    left:200px;
    bottom:0;
    border:1px solid red;
    height:100px;
  `
}
class MainPlainTemplate extends Component {
  render() {
    const {window,navigation,stage,controller} = this.props;
    return (
      <div>
        <Styled.Window>{window}</Styled.Window>
        <Styled.Stage>{stage}</Styled.Stage>
        <Styled.Navigation>{navigation}</Styled.Navigation>
        <Styled.Controller>{controller}</Styled.Controller>
      </div>
    );
  }
}

export default MainPlainTemplate;