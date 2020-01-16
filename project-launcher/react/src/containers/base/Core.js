import React, { Component } from 'react';
import throttle from 'lodash/throttle';
import { withRouter } from 'react-router-dom';
import { storage, keys } from 'lib/library'
import { connect } from 'react-redux';
import { Actions } from 'store/actionCreators';
import {AUTH_TOKEN_SAGAS} from 'store/actions';
import {FullScreenLoading} from 'components/base/loading'

class Core extends Component {
  
  initialize = async () => {
    const token = storage.get(keys.token);
    if (!token) {
      return Actions.base_exit_landing();
    }
    AUTH_TOKEN_SAGAS({token})
    // Actions.auth_token_request({ token });
  }

  setWidth = () => {
    if (typeof window === 'undefined') return;
    console.log('resive, setWidth');
    // BaseActions.setWidth(window.outerWidth);
  };

  onResize = throttle(() => {
    this.setWidth();
  }, 250);

  componentDidMount() {
    const { initialize } = this;
    initialize();
    window.addEventListener('resize', this.onResize);
  }
  
  render() {
    return(<FullScreenLoading visible={this.props.landing}/>)
  }
}

export default connect(
  ({ base }) => ({
    landing: base.landing,
  })
)(withRouter(Core));

