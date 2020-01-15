import React from 'react';
import { withRouter } from 'react-router-dom';
import {HomeContainer} from 'containers/home';

function Home(props) {
  return (
    <HomeContainer  />
  );
}

export default withRouter(Home);