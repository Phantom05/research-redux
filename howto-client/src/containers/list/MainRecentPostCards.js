import React, { Component } from 'react';
import { connect } from 'react-redux';
import { cook_v2, cook_v1, cook_v3 } from 'components/base/images';
import { LinePostList,TopPost } from 'components/common/post';
import PostMainTemplate from 'components/base/template/PostMainTemplate';


class MainRecentPostCards extends Component {
  render() {
    const LineList = [];
    for(let i=0;i<10;i++){
      LineList.push(
        {
          id: i+0,
          image: <img src={cook_v1} alt={cook_v1} />,
          title: "전복 비빔밥을 맛있게 하는 방법!",
          subTitle: "라면을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다.라zzz면을 잘 끓이기 위해선 물의 양이 매우 중요합니다. whwhwe1. 물의 양을 조절할떈 비커를 사용해서 사용한다",
          date: "2019-11-11 / 07:53",
          views: '985,987,84',
          author: "하늘하늘 거리는 이쯘녕",
          price:false
        },
        {
          id: i+1,
          image: <img src={cook_v2} alt={cook_v2} />,
          title: "라면은 어떻게해야 잘 끓일수 있는가?",
          subTitle: "라면wehwehweh을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다.zzzz 라면을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다",
          date: "2019-11-11 / 07:53",
          views: '985,987,84',
          author: "출근전 우울한 이쯘녕",
          price:false
        },
        {
          id: i+2,
          image: <img src={'https://img.insight.co.kr/static/2018/08/07/700/ffs6yoo8it332vpwp549.jpg'} alt={cook_v2} />,
          title: "족발은 어떻게 먹어야 맛있나요?",
          subTitle: "라면wehwehweh을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다.zzzz 라면을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다",
          date: "2019-11-11 / 07:53",
          views: '985,987,84',
          author: "피곤한 이쯘녕",
          price:false
        },
        {
          id: i+3,
          image: <img src={cook_v3} alt={cook_v3} />,
          title: "지코바는 어떻게 먹어야 맛이 있는가?",
          subTitle: "라면wehwehweh을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다.zzzz 라면을 잘 끓이기 위해선 물의 양이 매우 중요합니다. 1. 물의 양을 조절할떈 비커를 사용해서 사용한다",
          date: "2019-11-11 / 07:53",
          views: '985,987,84',
          author: "맛있는게 먹고픈 이쯘녕",
          price:true
        }
      )
    }
    return (
      <PostMainTemplate
        title={'The Latest'}
      >
        <TopPost
        
        />
        <LinePostList
          list={LineList}
        />
      </PostMainTemplate>
    );
  }
}

export default connect(
  () => ({

  })
)(MainRecentPostCards);