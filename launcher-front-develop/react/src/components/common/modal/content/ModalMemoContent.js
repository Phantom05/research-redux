import React from 'react';
import {HtmlConverter} from 'components/base/helpers/convert';
import styled from 'styled-components';
import { font ,color,buttonBlue ,buttonWhite} from 'styles/__utils';
import { Scrollbars } from 'react-custom-scrollbars';

function ModalMemoContent(props) {
  const {content, isEdit, onClick,contentHeight} = props;
  return (
    <Styled.ModalMemoContent contentHeight={contentHeight} isEdit={isEdit}>
      <h2 className="ModalMemoContent__title">{isEdit ? `Edit Memo`:`Memo` }</h2>
      <div className="ModalMemoContent__content">
        {/* <Scrollbars height={'288px'} > */}
        {content}
        {/* </Scrollbars> */}
      </div>
      <div className="ModalMemoContent__btn_box">
        <button 
          className="ModalMemoContent__btn ok"
          onClick={()=>{
            const config = isEdit ? {type:"memo",name:"edit_ok"}: 'dim'
            onClick(config);
          }}
        >Ok</button>
        {isEdit && 
        <button 
          className="ModalMemoContent__btn cancle"
          onClick={()=>onClick('dim')
        }>Cancle</button>}
      </div>
    </Styled.ModalMemoContent>
  );
}

const Styled={
  ModalMemoContent:styled.div`
    padding:30px 25px 20px 25px;
    .ModalMemoContent__title{
      text-align:center;
      ${font(18,color.black)};
      font-weight:bold;
      margin-bottom:20px;
    }
    .ModalMemoContent__content{
      padding:15px;
      ${props=>props.isEdit &&`padding:0`};
      border:1px solid ${color.grat_border6};
      ${font(14,color.black)};
      overflow:auto;
      margin-bottom:20px;
      ${props=>props.contentHeight && `height:${props.contentHeight}px`};
      /* height:290px; */

    }
    .ModalMemoContent__btn_box{
      text-align:center;
      
    }
    .ModalMemoContent__btn{
      &.ok{
        ${buttonBlue};
        margin-right:5px;
        width:80px;
      }
      &.cancle{
        ${buttonWhite};
      }
    }
    
  `
}

export default ModalMemoContent;