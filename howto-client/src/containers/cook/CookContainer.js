import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlainTemplate from 'components/base/template/PlainTemplate';
import MainHeader from 'components/common/header/MainHeader';
import MainNavigation from 'components/common/navigation/MainNavigation';
import RecentPostCards from 'containers/list/RecentPostCards';
import {Actions} from 'store/actionCreators';

class CookContainer extends Component {


  componentDidMount() {
    window.scrollTo(0, 0);
    Actions.listing_get_recent_posts()
  }
  render() {
    const { listingReducer } = this.props;
    // const {count} = homeReducer;
    console.log(listingReducer.recent);
    const sortList = ["모두", "새글", "한식", "양식", "중식", "일식", "치킨", "피자", "도시락", "편의점"];

    return (
      <PlainTemplate
        header={<MainHeader />}
        navigation={<MainNavigation />}
      >
        <RecentPostCards
          type={`Cook and Recipe`}
          filterList={sortList}
          posts={listingReducer.recent.posts}
        />
      </PlainTemplate>
    );
  }
}

export default connect(
  ({ home, listing }) => ({
    homeReducer: home,
    listingReducer: listing
  })
)(CookContainer);