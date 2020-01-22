import React from 'react';
import styled from 'styled-components';
import { color, font } from 'styles/__utils';

function CaseLoadList(props) {
  const { list } = props;
  return (
    <Stlyed.CaseLoadList>
      <h1 className="caseload__title">Load Case</h1>
      <div className="caseload__con_box">
        {Array.isArray(list) && list.map((item, idx) => {
          return (
            <div key={idx} className="caseload__con">
              <div className="caseload__subtitle">{item.caseId}</div>
              <div className="caseload__box">
                {item.sender}
              </div>
            </div>
          )
        })}
      </div>
      <div className="caseload__button_box">
        <button className="caseload__button caseload__button-blue">LOAD</button>
      </div>
    </Stlyed.CaseLoadList>
  );
}

const Stlyed = {
  CaseLoadList: styled.div`
    padding:30px;
    .caseload__con_box{
      max-height:300px;
      overflow-y:auto;
    }
    .caseload__con{
      cursor: pointer;
      margin-bottom:15px;
      &:hover{
        .caseload__box{
          background:rgba(0,0,0,.1);
        }
      }
    }
    .caseload__title{
      text-align:center;
      ${font(18, color.black)};
      margin-bottom:25px;
    }
    .caseload__subtitle{
      ${font(14, color.black)};
      margin-bottom:5px;
    }
    .caseload__box{
      padding:13px;
      border-radius:10px;
      border:1px solid ${color.grat_border6};
      ${font(14, color.black)};
    }
    .caseload__button_box{
      background:white;
      text-align:right;
      padding-top:15px;
    }
    .caseload__button{
      box-shadow:none;
      border-radius:3px;
      font-weight:600;
      cursor: pointer;
      padding:5px 15px;
      &-blue{
        border:2px solid ${color.blue};
        background:${color.blue};
        color:white;
        &:hover{
          background:${color.blue_hover};
          box-shadow:none;
        }
      }
      &-white{
        border:2px solid ${color.blue};
        background:white;
        color:${color.blue};
        &:hover{
          background:white;
          box-shadow:none;
        }
      }
    }
  `
}

export default CaseLoadList;