import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { storage, keys } from 'lib/library';

class WithLogged extends Component{
  render() {
    let logged = false
    const loggedStorage = storage.get(`${keys}logged`);
    logged= loggedStorage ? true : false; 
    const {url,  isLogged,isNotLogged} = this.props;
    console.log(logged,'withLogged');
    return (
      <>
        {isLogged && logged &&  <Redirect to={url? url : '/'} />}
        {isNotLogged && !logged && <Redirect to={url? url : '/login'} />}
      </>
    )
  }
}

export default WithLogged;