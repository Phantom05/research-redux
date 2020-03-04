import React from 'react';
import styled from 'styled-components';

function TestItem(props) {
  const idx =props.idx;
  const info =props.info;
  const detail = props.detail;
  
  const isMine = info.author.username === detail.author.username;
  // console.log(props);
  return (
    <Styled.TestItem>
      <p><button onClick={()=>props.onClick({info,idx})}>Detail</button> {info.title}</p>
      <div className="item__body">
        {isMine &&
          <div>{detail.slug}</div>
        }
      </div>
    </Styled.TestItem>
  );
}

const Styled ={
  TestItem:styled.div`
    padding:5px;
    border:1px solid #ececec;
    /* cursor: pointer; */
    &:hover{
      background:#ececec;
    }
    & >{
      .item__body{
        padding:10px;
      }
    }
  `
}

export default TestItem;