import React, { Component } from 'react';
import 'antd/dist/antd.css';
import CounterContainer from 'containers/CounterContainer';
import TodosContainer from 'containers/TodosContainer';
import AppTemplate from './AppTemplate';
import CrudContainer from 'containers/CrudContainer';



class App extends Component {
  render() {
    return (
      <AppTemplate 
        counter={<CounterContainer />}
        todos={<TodosContainer />}
        crud={<CrudContainer />}
      />
    );
  }
}

export default App;