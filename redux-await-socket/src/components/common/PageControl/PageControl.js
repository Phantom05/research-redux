import React  from 'react';
import { Redirect,withRouter } from 'react-router-dom';

const PageControl = ({match,page})=>
  (match.url !== page) && <Redirect to={page}/>

export default withRouter(PageControl);