import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/common/header/MainHeader';
import MainNavigation from 'components/common/navigation/MainNavigation';
import { LinePost } from 'components/common/post';
import { ai_test,cook_v1 } from 'components/base/images';

class HomeContainer extends Component {
  render() {
    // const {homeReducer} = this.props;
    // const {count} = homeReducer;

    const LineList = [
      {
        id: 0,
        image: <img src={cook_v1} alt={cook_v1} />,
        title: "전복 비빔밥을 맛있게 하는 방법!",
        subTitle: "라면을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다.라zzz면을 잘 끓이기 위해선 물의 양이 매우 중요합니다. whwhwe1. 물의 양을 조절할떈 비커를 사용해서 사용한다",
        date: "2019-11-11 / 07:53",
        views: '985,987,84',
        author:"하늘하늘 거리는 이쯘녕",
      },
      {
        id: 1,
        image: <img src={ai_test} alt={ai_test} />,
        title: "라면은 어떻게해야 잘 끓일수 있는가?",
        subTitle: "라면wehwehweh을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다.zzzz 라면을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다",
        date: "2019-11-11 / 07:53",
        views: '985,987,84',
        author:"출근전 우울한 이쯘녕"
      }
    ]
    return (
      <PlainTemplate
        header={<MainHeader />}
        navigation={<MainNavigation />}
      >
        <div style={{width:'1000px'}}>
          <h2>The Latest</h2>
          {LineList.map(info => (
            <LinePost key={info.id} {...info} />
          ))}

        </div>
      </PlainTemplate>
    );
  }
}

export default connect(
  ({ home }) => ({
    homeReducer: home
  })
)(HomeContainer);