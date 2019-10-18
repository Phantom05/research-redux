import React, { Component } from 'react';
import Test from 'components/common/Button/TestButton';


class NavigationContainer extends Component {
  render() {
    return (
      <div>
          Navigation
          <Test theme={'black'} text={'첫번째 버튼'} />
          <Test theme={'red'}   text={'test'}/>
          <Test theme={'blue'}  text={'마지막 버튼'}/>
      </div>
    );
  }
}

export default NavigationContainer;