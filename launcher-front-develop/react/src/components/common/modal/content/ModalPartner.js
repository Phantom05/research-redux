import React from 'react';
import styled from 'styled-components';
import {font,color} from 'styles/__utils';


function ModalPartner(props) {
  const {
    modalInfo
  } = props;
  let {
    profile,
    myCode,
    company,
    manager,
    email,
    phone,
    address,
    country,
    state,
    type
  } = modalInfo;

  const label = {
    myCode : '고유번호',
    company : '업체명',
    manager: '담당자 이름',
    email: '메일 주소',
    local: '지역',
    type: '타입',
    phone: '연락처',
    address:'주소',
  }
  
  //데이터 파싱
  const typeList = {
    clinic: '클리닉',
    lab: '기공소',
    milling: '밀링센터',
    none: '없음'
  }

  const data = {
    myCode: myCode,
    company: company,
    manager: manager,
    email: email,
    phone: phone,
    address: address,
    local: `${country} / ${state}`,
    type: `${
      Object.keys(type).map(i => {
        return type[i] ? typeList[i] : '';
      }).join(' ').length ? 
      Object.keys(type).map(i => {
        return type[i] ? typeList[i] : '';
      }).join(' ')
      :
      typeList["none"]
    }`,
  }

  const tagCont = Object.keys(label).map((i, index) => {
    return(
      <div className="row" key={index}>
        <div className="row_label">
          {label[i]}
        </div>
        <div className="row_cont">
          {data[i]}
        </div>
      </div>
    );
  });


  return (
    <Styled.ModalPartner>
      <h1 className="title">업체 정보 보기</h1>
      <div className="cont">
        {
          tagCont
        }
      </div>
    </Styled.ModalPartner>
  );
}

const Styled = {
  ModalPartner: styled.div`
    padding: 30px;
    min-height: 500px;
    .title{
      font-size: 18px;
      color: #242F35;
      text-align: center;
      font-weight: bold;
    }
    .cont{
      margin-top: 20px;
      border: 1px solid #E2E7EA;
      padding: 30px;
      height: 400px;

      .row{
        position: relative;
        font-size: 14px;
        .row_label{
          position: absolute;
          left: 0;
          top: 0;
          font-weight: bold;
          color: #242F35;
        }
        .row_cont{
          display: inline-block;
          padding-left: 130px;
          color: #777777;
        }
      }
      .row + .row{
        margin-top: 20px;
      }
    }
  `,
}

export default ModalPartner;