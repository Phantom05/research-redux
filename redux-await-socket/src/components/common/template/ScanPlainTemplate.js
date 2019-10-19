import React, { Component } from 'react';

class ScanPlainTemplate extends Component {
  
  render() {
    const {children,window} =this.props;
    return (
      <div>
        <div>{window}</div>
        {children}
      </div>
    );
  }
}

export default ScanPlainTemplate;