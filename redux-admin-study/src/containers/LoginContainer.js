import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from 'components/Login';
import Counter from 'components/Counter';
import { AuthActions, SagaActions } from 'store/actionsCreators';


class LoginContainer extends Component {
  handleTest = () => {
    AuthActions.logged()
  }
  asyncSaga = () => {
    console.log('asyncSaga');
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
        <Login
          logged={logged}
          email={email}
          password={password}
          remember={remember}
          handleTest={this.handleTest}
          asyncSaga={this.asyncSaga}
        />
        <Counter
          value={store.getState()}
          onIncrement={() => action('INCREMENT')}
          onDecrement={() => action('DECREMENT')}
          onIncrementAsync={() => action('INCREMENT_ASYNC')} />,
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