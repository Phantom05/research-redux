import React, { PureComponent } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styled from 'styled-components';
import cx from 'classnames';
import { Input, Select, Radio, Button } from 'antd';
import {font} from 'styles/utils';

// import { Editor,EditorState } from 'react-draft-wysiwyg';

const Styled = {
  BoardWrite: styled.div`
  .board__write_title{
    margin-top:40px;
    margin-bottom:20px;
    ${font};
    font-weight:bold;
    font-size:20px;
  }
    .boardWrite__title{
      margin:5px 0;
    }
    .board__editor{
      width:100%;
      border-radius:5px;
      min-height:50vh;
      padding:5px;
    }
    .board__btn_box{
      text-align:center;
    }
    .board__notice_info{
      ${font};
      margin:15px 0;
    }
    .board__private_box{
      margin:5px 0;
    }
  `,
}

class BoardWrite extends PureComponent {
  state = {
    privateValue: false,
    editor: '',
    title: '',
    boardName:'',
    categoreySeq:''
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }
  handleSelect = (value)=>{
    this.setState({
      categoreySeq:value
    })
  }

  handleSubmit = () =>{
    const {handleWrite} = this.props;
    handleWrite(this.state)
  }

  componentDidMount(){
    const {menuList} = this.props;
    this.setState({
      categoreySeq:menuList[0].id
    })
  }


  render() {
    const { editor, privateValue, title,categoreySeq } = this.state;
    const {uploadPending,menuList} = this.props;
    const { Option } = Select;

    return (
      <Styled.BoardWrite>
        <h1 className={cx('board__write_title')}>BOARD WRITE</h1>
        <Select defaultValue="말머리선택" style={{ width: 120 }} >
          <Option value="말머리선택">말머리선택</Option>
          <Option value="1일">1일</Option>
          <Option value="1주">1주</Option>
          <Option value="1개월">1개월</Option>
          <Option value="6개월">6개월</Option>
          <Option value="1년">1년</Option>
        </Select>

        {menuList && 
        <Select 
          style={{ width: 250 }} 
          onChange={this.handleSelect} 
          name="categoreySeq"
          value={categoreySeq}
          >
          {menuList.map(list=>(
            <Option key={list.id} value={list.id}>{list.title} {list.group_name}</Option>
          ))}
        </Select>}


        <div className={cx('boardWrite__title')}>
          <Input
            placeholder="제목"
            name="title"
            value={title}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className={cx('board__editor')}
            value={editor}
            onChange={this.handleChange}
            name="editor"
            autoComplete="off"
          >
          </textarea>

        <div className={cx('board__private_box')}>
          <Radio.Group onChange={this.handleChange} value={privateValue} name="privateValue">
            <Radio value={false}>전체공개</Radio>
            <Radio value={true}>멤버공개</Radio>
          </Radio.Group>
        </div>
        <p className={cx('board__notice_info')}>저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하는 게시글은 이용약관 및 관련법률에 의해 제재를 받으실 수 있습니다.</p>
        <div className={cx('board__btn_box')}>
          <Button 
            className={cx('')}
          >미리보기</Button>
          <Button 
            onClick={this.handleSubmit} 
            type="primary" 
            loading={uploadPending && true}
          >글쓰기</Button>

        </div>
      </Styled.BoardWrite>
    );
  }
}

export default BoardWrite;