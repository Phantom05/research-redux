import React, { Component } from 'react';
import { Input, Select } from 'antd';
import cx from 'classnames';
import styled from 'styled-components';
// import { color, font } from 'styles/utils';

const Styled = {
  BoardFilter: styled.div`
    .board__controll_box{
      text-align:right;
    }
    .board__controll_box{
      margin-bottom:15px;
    }
  `
}

class BoardFilter extends Component {
  render() {
    const { Option } = Select;
    return (
      <Styled.BoardFilter>
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
      </Styled.BoardFilter>
    );
  }
}

export default BoardFilter;