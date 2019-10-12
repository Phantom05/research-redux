import React, { Component } from 'react';
import Crud from 'components/Crud';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import * as crudActions from 'store/modules/crud';
import { CrudActions} from 'store/actionCreators';

class CrudContainer extends Component {
  handlePage =(pageName) => ()=>{
    // const {CrudActions} = this.props;
    CrudActions.page(pageName)
  }
  handleDeleteItem =(id) =>{
    console.log(id);
    // const {CrudActions} = this.props;
    CrudActions.deleteItem(id);
  }
  handleChange =(e) =>{
    // const {CrudActions} = this.props;
    CrudActions.changeInput(e.target.value);
  }
  handleChangeTextArea =(e) =>{
    const {CrudActions} = this.props;
    // CrudActions.changeTextarea(e.target.value);
  }
  handleWrite =(inputValue,textareaValue)=>{
    // const {CrudActions} = this.props;
    CrudActions.write({input:inputValue,textarea:textareaValue});
    CrudActions.changeInput('');
    CrudActions.changeTextarea('');
    alert('Success Writed')
  }
  handleKeyUp = (e)=>{
    if(e.keyCode !== 13) return;
    this.handleWrite(e.target.value)
  }
  handleDetail=(id)=>{
    console.log(id);
    // const {CrudActions} = this.props;
    CrudActions.detail(id)
    CrudActions.page('detail');
  }
  render() {
    const {
      handlePage,
      handleDeleteItem,
      handleChange,
      handleWrite,
      handleKeyUp,
      handleChangeTextArea,
      handleDetail} = this;
    const {page,input,list,textarea,detail} = this.props;
    return (
      <div>
        <Crud 
          page={page} 
          input={input}
          textarea={textarea}
          list={list}
          handleMenu={handlePage}
          handleDeleteItem={handleDeleteItem}
          handleChange={handleChange}
          handleWrite={handleWrite}
          handleKeyUp={handleKeyUp}
          handleChangeTextArea={handleChangeTextArea}
          handleDetail ={handleDetail}
          detail={detail}
        />
      </div>
    );
  }
}

// connect 가 index를 찌르는거같음.
// 그래서 거기서 export 된것중에 crud 를 가져와야함.
export default connect(
  ({crud})=>({
    page     : crud.get('page'),
    list     : crud.get('list'),
    input    : crud.get('input'),
    textarea : crud.get('textarea'),
    detail   : crud.get('detail'),
  })
  // ,(dispatch)=> ({
  //   CrudActions:bindActionCreators(crudActions,dispatch)
  // })
)(CrudContainer) ;