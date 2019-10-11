import React, { Component } from 'react';
import {Map,List} from 'immutable';
import { Button, Menu, Dropdown, Icon, Input, Empty  } from 'antd';



const CrudItem = ({title,onClick}) =>(
  <div style={{borderBottom:'1px solid #ececec'}}>
    <Button onClick={onClick}>Delete</Button> 
    {title} 
  </div>
);
const menu = (
  <Menu >
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);
const ListPage = ({handleDeleteItem,list}) => {
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
          <CrudItem onClick={() => handleDeleteItem(info.id)} key={info.id} title={info.title}/>
        ))
        }
      </div>
    </div>
  </div>
  )
}
const WritePage = ({onChange,input,onClick, onKeyUp}) => (
  <div>
    <h2>Write</h2>
    <Input onKeyUp={onKeyUp} onChange={onChange} placeholder="Title" style={{ width: '50%' }} value={input} />
    <Button onClick={()=>onClick(input)}>Write</Button>
  </div>
);
const DetailPage = () =>(
  <div>
    Detail
  </div>
)

class Crud extends Component {
  render() {
    const { page, handleMenu,disable,handleDeleteItem,handleChange,handleWrite,handleKeyUp ,list,input} = this.props;
    // console.log(list);

    let pageObj = {
      'write': <WritePage onKeyUp={handleKeyUp} input={input} onChange={handleChange} onClick={handleWrite}/>,
      'list': <ListPage handleDeleteItem={handleDeleteItem} list={list}/>,
      'detail':<DetailPage />
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
}



// [
//   Map({
//     key: '1',
//     name: 'John Brown',
//     title: 'New York No. 1 Lake Park',
//     date: '2019-10-12',
//   }),
//   Map({
//     key: '2',
//     name: 'Jim Green',
//     title: 'London No. 1 Lake Park',
//     date: '2019-10-12',
//   }),
//   Map({
//     key: '3',
//     name: 'Joe Black',
//     title: 'Sidney No. 1 Lake Park',
//     date: '2019-10-12',
//   })
// ]