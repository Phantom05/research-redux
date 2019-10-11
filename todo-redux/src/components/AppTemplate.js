import React from 'react';
import './AppTemplate.css';

const AppTemplate = ({counter, todos, crud}) => {
  return (
    <div className="app-template">
      <div className="crud">{crud}</div>
      <div className="counter">{counter}</div>
      <div className="todos">{todos}</div>
    </div>
  );
};

export default AppTemplate;