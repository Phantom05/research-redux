import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { storage, keys } from 'lib/library'
import { connect } from 'react-redux';
import { Actions } from 'store/actionCreators';
// import {disableDragSelect} from 'utils';

class Core extends Component {
  initialize = async () => {
    const token = storage.get(keys.token);
    if (!token) {
      return Actions.base_exit_landing();
    }
    if (token) {
      Actions.base_enter_landing();
      Actions.auth_token_request({ token });
    }
  }
  componentDidMount() {
    const { initialize } = this;
    initialize();
  }

  render() {
    return(<></>)
  }
}

export default connect(
  ({ auth }) => ({
    isAutheticated: auth.isAutheticated,
  })
)(withRouter(Core));

