import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
// import {color} from 'styles/utils';

const Styled={
  PlainTemplate:styled.div`
    ${props => props.headerHeight && `border-top:${props.headerHeight}px solid transparent`};

  `,
  Header: styled.header`
      position:fixed;
      top:0;
      right:0;
      width:100%;
      width:${props=> props.navigationWidth ? `calc(100% - ${props.navigationWidth}px)` : '100%'};
      z-index:50000;
  `,
  Navigation:styled.nav`
      position:fixed;
      bottom:0;
      left:0;
      height:100vh;
      z-index:50001;
 `,
  Main:styled.main`
    position:relative;
    /* ${props=> props.headerHeight ?`height:calc(100vh - ${props.headerHeight}px)`:`height:100vh`}; */
    ${props=> props.navigationWidth ?`padding-left:${props.navigationWidth}px`:`width:100%`}
    ${props=> props.contentBackgroundColor && `background:${props.contentBackgroundColor}`};

    .main{
      width:70%;
      ${props=> props.contentPosition === 'centerCenter' && `
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%)
      `}
      ${props=> props.contentPosition === 'heightCenter' && `
        position:absolute;
        top:50%;
        transform:translateY(-50%)
      `}
      ${props=> props.contentPosition === 'WidthCenter' && `
        position:absolute;
        left:50%;
        transform:translateX(-50%)
      `}
       padding-bottom:100px;
    }
  `
}
class PlainTemplate extends Component {
  state={
    headerHeight:0,
    navigationWidth:0
  }
  componentDidMount(){
    if(this.header && this.header.clientHeight){
      this.setState({
        headerHeight:this.header.clientHeight
      });
    }
    if(this.navigation && this.navigation.clientWidth){
      this.setState({
        navigationWidth:this.navigation.clientWidth
      });
    }
  }
  render() {
    const {children, header,navigation} = this.props;
    return (
      <Styled.PlainTemplate {...this.props} {...this.state}>
        {header &&  <Styled.Header ref={ref=>this.header = ref} children={header}  {...this.state}/>}
        {navigation &&  <Styled.Navigation ref={ref=>this.navigation = ref}  children={navigation} {...this.state}/>}
        <Styled.Main {...this.props} {...this.state}>
          <div className={cx('main')}>{children}</div>
        </Styled.Main>
      </Styled.PlainTemplate>
    );
  }
}

export default PlainTemplate;