import React, { Component } from 'react';
import Todos from 'components/Todos';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as todoActions from 'store/modules/todo';

class TodosContainer extends Component {
  handleChange = (e) =>{
    // 인풋 값 변경
    const { TodoActions} = this.props;
    TodoActions.changeInput(e.target.value);
  }

  handleInsert = ()=>{
    const {input, TodoActions} = this.props;
    TodoActions.insert(input);
    TodoActions.changeInput('');
  }
  handleToggle =(id)=>{
    // 삭제선 켜고 끄기
    const {TodoActions} = this.props;
    TodoActions.toggle(id);
  }
  handleRemove =(id) =>{
    // 아이템 제거
    const {TodoActions} = this.props;
    TodoActions.remove(id);
  }
  handleKeyUp =(e) =>{
    if(e.keyCode !== 13 ) return;
    this.handleInsert();
  }
  render() {
    const {handleChange, handleInsert, handleToggle, handleRemove,handleKeyUp} = this;
    const {input, todos} = this.props;
    return (
      <Todos 
        input ={input}
        todos={todos}
        onChange={handleChange}
        onInsert={handleInsert}
        onToggle={handleToggle}
        onRemove={handleRemove}
        onKeyUp={handleKeyUp}
      />
    );
  }
}

export default connect(
  // state를 비구조화 할당 해주었습니다.
  ({todo}) => ({
    // immutable을 사용하니, 값을 조회 할 때는 .get을 사용함
    input:todo.get('input'),
    todos:todo.get('todos')
  }),
  (dispatch) =>({
    TodoActions:bindActionCreators(todoActions,dispatch)
  })
)(TodosContainer);