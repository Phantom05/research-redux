import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from 'components/Login';
import Counter from 'components/Counter';
import WithLogged from 'lib/hoc/WithLogged';
import { AuthActions, SagaActions } from 'store/actionsCreators';
import {postLogin} from 'lib/api/login'
// import store from 'store';


class LoginContainer extends Component {
  handleTest = () => {
    AuthActions.logged()
  }
  asyncSaga = () => {
    console.log('asyncSaga');
  }
  handleLogin = (value) =>{
    console.log(value,'config');
    const {email,password} = value;

    postLogin({email,password}).then((response=>{
      let {data} = response;
      if(data.result === 1){
        AuthActions.logged(true);
      }else{
        alert('Please, Account Check.')
      }
    }))
  }
  render() {
    const {
      logged,
      email,
      password,
      remember,
    } = this.props;
    return (
      <div>
        <WithLogged url="/dashboard" isLogged/> 
        <Login
          logged={logged}
          email={email}
          password={password}
          remember={remember}
          handleTest={this.handleTest}
          asyncSaga={this.asyncSaga}
          handleLogin={this.handleLogin}
        />
        <Counter
          // value={store.getState()}
          // onIncrement={() => action('INCREMENT')}
          // onDecrement={() => action('DECREMENT')}
          // onIncrementAsync={() => action('INCREMENT_ASYNC')} 
        />
      </div>
    );
  }
}
export default connect(
  ({ auth }) => ({
    logged: auth.logged,
    email: auth.email,
    password: auth.password,
    remember: auth.remember,
  })
)(LoginContainer);