import React from 'react';
import { NotFound } from 'components/base/helpers/error';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

import Core from 'containers/base/Core';
import {FullScreenLoading} from 'components/base/loading';
import {
  Home,
  Auth,
} from 'pages';


function App() {
  return (
    <div>
      <Stlyed.GlobalStyles />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/auth" component={Auth} />
        <Route  path="/loading" component={FullScreenLoading} />
        <Route component={NotFound} />
      </Switch>
      <Core />
      
    </div>
  );
}

const Stlyed ={
  GlobalStyles:createGlobalStyle`
  ${reset};
  a{
      text-decoration:none;
      color:inherit;
  }
  *{
      box-sizing:boerder-box;
  }
  body{
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 14px;
  }
  `
}


export default App;