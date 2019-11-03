import React, { Component } from 'react';
import styled from 'styled-components';
import cx from 'classnames';
import { color, font } from 'styles/utils';
import { Input, Select, DatePicker } from 'antd';


const Styled = {
  PlainBoardTemplate: styled.div`
  
    .board__title{
      padding-top:40px;
      padding-bottom:15px;
      color:${color.redTitle};
      ${font};
      font-size:35px;
      font-weight:bold;
    }
    .board__subtitle{
      padding-bottom:40px;
      ${font};
      color:${color.graySubtitle};
      font-size:15px;
    }
    .board__main{
      margin-top:15px;
    }
    .board__controll_box{
      text-align:right;
    }
  `
}
class PlainBoardTemplate extends Component {
  render() {
    const { title, main, type } = this.props;
    const { Option, OptGroup } = Select;
    const { RangePicker } = DatePicker;
    return (
      <Styled.PlainBoardTemplate>

        <h1 className={cx('board__title')}>{title}</h1>
        <h2 className={cx('board__subtitle')}>{title} {type} 게시판입니다.</h2>
        <div className={cx('board__controll_box')}>

          <Select defaultValue="전체기간" style={{ width: 120 }} >
            <Option value="전체기간">전체기간</Option>
            <Option value="1일">1일</Option>
            <Option value="1주">1주</Option>
            <Option value="1개월">1개월</Option>
            <Option value="6개월">6개월</Option>
            <Option value="1년">1년</Option>
          </Select>

          <Select defaultValue="제목+내용" style={{ width: 120 }} >
            <Option value="제목+내용">제목+내용</Option>
            <Option value="제목만">제목만</Option>
            <Option value="글작성자">글작성자</Option>
            <Option value="댓글내용">댓글내용</Option>
            <Option value="댓글작성자">댓글작성자</Option>
          </Select>

          <Input.Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        <div className={cx('board__main')}>{main}</div>
      </Styled.PlainBoardTemplate>
    );
  }
}

export default PlainBoardTemplate;