import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import produce from 'immer';
import {
  color,
  floatClear
} from 'styles/utils';

const Styled = {
  HalfTemplate: styled.div`
    ${floatClear};
    .hlaf__box{
      position:relative;
      float:left;
      height:200px;
      &.left{
        width:60%;
      }
      &.right{
        width:40%;
      }
    }
    .controll__wiper{
      position:absolute;
      right:0;
      width:4px;
      height:100%;
      top:0;
      background:red;
      cursor: col-resize;
    }

  `
}
class HalfTemplate extends Component {
  state={
    dragging:false,
    right:{
      height:'',
      top:'',
      left:''
    }
  }
  handleMouseDown = (e) => {
    console.log('handleMouseDown');
    e.preventDefault();
    this.setState({
      dragging:true
    })

    // var main = $('#main');
    // var ghostbar = $('<div>',
    //   {
    //     id: 'ghostbar',
    //     css: {
    //       height: main.outerHeight(),
    //       top: main.offset().top,
    //       left: main.offset().left
    //     }
    //   }).appendTo('body');

    // $(document).mousemove(function (e) {
    //   ghostbar.css("left", e.pageX + 2);
    // });
  }
  componentDidMount(){
    // const height = this.divElement.clientHeight;
    this.setState(produce(this.state,draft=>{
      draft.right.height = 10;
    }))

  }
  render() {
    console.log(this.state,'state');
    const { left, right } = this.props;
    return (
      <Styled.HalfTemplate>
        <div className={cx('hlaf__box left')}>{left}
          <div onMouseDown={this.handleMouseDown} className={cx('controll__wiper')}></div>
        </div>
        <div 
          id="right"
          className={cx('hlaf__box right')}

          >{right}</div>
      </Styled.HalfTemplate>
    );
  }
}

export default HalfTemplate;