import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux';
import './App.css';
import {
  Home,
} from 'pages';



function App() {
  const {base:baseReducer} = useSelector(state=>state);


  return (
    <>
    <div  style={{height: `100vh` }} >
      <Helmet>
        <title>DOF Launcher</title>
      </Helmet>

      <Switch>
        <Route  exact path="/" component={Home} />
      </Switch>
      </div>
    </>
  );
}

export default App;
