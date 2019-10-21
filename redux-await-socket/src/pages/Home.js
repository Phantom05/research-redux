import React, { Component } from 'react';
import WindowContainer from 'containers/WindowContainer';
import ScanPlainTemplate from 'components/common/template/ScanPlainTemplate';

class Home extends Component {

  render() {
    const { props } = this.props;
    return (
      <ScanPlainTemplate
        window={<WindowContainer {...props} />}
      />
    );
  }
}

export default Home;