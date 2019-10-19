import React  from 'react';
import { Redirect,withRouter } from 'react-router-dom';

const PageRouter = ({match,page})=>
  (match.url !== page) && <Redirect to={page}/>

export default withRouter(PageRouter);