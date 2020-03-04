import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Core from 'containers/base/Core';
import {
  Home,
} from 'pages';


function App() {
  return (
    <>
      <Helmet>
        <title>React Test</title>
      </Helmet>
      <Core />
      <Switch>

        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
}

export default App;
