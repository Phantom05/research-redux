import React, { Component } from 'react';
// import styled from 'styled-components';
// import cx from 'classnames';
// import { floatClear, font, color } from 'styles/utils';

import { LinePost } from 'components/common/post';

class LinePostList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list
          ? list.map((info,idx) => (
            info.price?<LinePost key={idx} {...info} />:<LinePost key={idx} {...info} />
          ))
          : <div>현재 포스트가 존재하지 않습니다.</div>}
      </div>
    );
  }
}

export default LinePostList;