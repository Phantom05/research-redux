import React, { Component } from 'react';
import Crud from 'components/Crud';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as crudActions from 'store/modules/crud';

class CrudContainer extends Component {
  handlePage =(pageName) => ()=>{
    const {CrudActions} = this.props;
    CrudActions.page(pageName)
  }
  handleDeleteItem =(id) =>{
    console.log(id);
    const {CrudActions} = this.props;
    CrudActions.deleteItem(id);
  }
  handleChange =(e) =>{
    const {CrudActions} = this.props;
    CrudActions.changeInput(e.target.value);
  }
  handleWrite =(value)=>{
    const {CrudActions} = this.props;
    CrudActions.write(value);
    CrudActions.changeInput('');
  }
  handleKeyUp = (e)=>{
    if(e.keyCode !== 13) return;
    this.handleWrite(e.target.value)

  }
  render() {
    const {handlePage,handleDeleteItem,handleChange,handleWrite,handleKeyUp} = this;
    const {page,input,list} = this.props;
    return (
      <div>
        <Crud 
          page={page} 
          input={input}
          list={list}
          handleMenu={handlePage}
          handleDeleteItem={handleDeleteItem}
          handleChange={handleChange}
          handleWrite={handleWrite}
          handleKeyUp={handleKeyUp}
        />
      </div>
    );
  }
}

// connect 가 index를 찌르는거같음.
// 그래서 거기서 export 된것중에 crud 를 가져와야함.
export default connect(
  ({crud})=>({
    page:crud.get('page'),
    list:crud.get('list'),
    input:crud.get('input')
  })
  ,(dispatch)=> ({
    CrudActions:bindActionCreators(crudActions,dispatch)
  })
)(CrudContainer) ;