import React, { Component } from 'react';
import {Map,List} from 'immutable';
import './Crud.css';
import { Button, Menu, Dropdown, Icon, Input, Empty   } from 'antd';
const {TextArea} = Input;


const CrudItem = ({title,onClick,viewDetail}) =>(
  <div className="itemRow">
  <Button className="deleteBtn" onClick={onClick}>Delete</Button> 
  <div className="CrudItem" onClick={viewDetail}>
    
    {title} 
  </div>
  </div>
);
const menu = (
  <Menu >
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);
const ListPage = ({handleDeleteItem,list,handleDetail}) => {
  let itemList = list.toJS();
  return (
    <div>
    <h2>List</h2>
    <div className="CrudBox">
        <div>
        {
          itemList.length === 0 
          ?<Empty /> 
          : list.toJS().map(info=>(
          <CrudItem viewDetail={() => handleDetail(info.id)} onClick={() => handleDeleteItem(info.id)} key={info.id} title={info.title}/>
        ))
        }
      </div>
    </div>
  </div>
  )
}
const WritePage = ({onChange,input,onClick, onKeyUp,textarea,onChangeTextArea}) => (
  <div>
    <h2>Write</h2>
    <Input onKeyUp={onKeyUp} onChange={onChange} placeholder="Title" style={{ width: '50%' }} value={input} />
    <TextArea  onChange={onChangeTextArea} value={textarea} rows={4} placeholder="Content"/>
    <Button onClick={()=>onClick(input,textarea)}>Write</Button>
  </div>
);
const DetailPage = ({title,content}) =>(
  <div>
    <h3>Title : {title}</h3>
    <h5>content</h5>
    <div>{content}</div>
  </div>
)

class Crud extends Component {
  render() {
    const { 
      page, 
      handleMenu,
      disable,
      handleDeleteItem,
      handleChange,
      handleWrite,
      handleKeyUp,
      handleDetail ,
      handleChangeTextArea,
      list,
      input,
      textarea,
      detail} = this.props;
    // console.log(list);

    let pageObj = {
      'write': <WritePage 
        textarea={textarea} 
        onChangeTextArea={handleChangeTextArea} 
        onKeyUp={handleKeyUp} 
        input={input} 
        onChange={handleChange} 
        onClick={handleWrite}/>,
      'list': <ListPage handleDetail={handleDetail} handleDeleteItem={handleDeleteItem} list={list}/>,
      'detail':<DetailPage title={detail.title} content={detail.content} />
    }
    let PageRender = pageObj[page];
    return (
      <div>
        <h1>Crud</h1>
        <Button 
          type={page === 'list' ? 'primary':disable} 
          onClick={handleMenu('list')}>
            List
        </Button>
        <Button 
          type={page === 'write' ? 'primary':disable} 
          onClick={handleMenu('write')}>
            Write
        </Button>
        {/* <Dropdown overlay={menu}>
          <Button>
            Actions <Icon type="down" />
          </Button>
        </Dropdown> */}
        {PageRender}
      </div>
    );
  }
}

export default Crud;
Crud.defaultProps = {
  disable:'false',
  list:List(),
  detail:{
    title:'',
    content:''
  }
}

