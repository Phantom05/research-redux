import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  withRouter } from 'react-router-dom';
import PageControl from 'components/common/PageControl';

const data = require('lib/config/protocol.json');
class Setting extends Component {

  render() {
    const { page } = this.props;
    return (
      <div>
        <PageControl page={page} />
      </div>
    );
  }
}

export default connect(
  ({ window, websocket }) => ({
    page: window.page,
    value: window.value,
    subTitle: window.subTitle,
    disable: websocket.disable
  })
)(withRouter(Setting));