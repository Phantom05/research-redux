import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Header from 'components/base/Header';
import { Actions } from 'store/actionCreators';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends PureComponent {
  state = {
    category: 'home'
  }
  initialize = () => {
    const {match} = this.props;
    const pageConfig={
      '/study':'스터디',
      '/exercise':"운동",
      '/storyTalk':'토크'
    }
    let pageName = pageConfig[match.path];
    Actions.base_board_get_menu_request(pageName)
  }
  componentDidMount() {
    this.initialize();
  }
  handleLogout = () => {
    Actions.auth_logout_request();
  }
  handleCategoryMenu = (category) => {
    this.setState({
      category: category
    })
  }
  UNSAFE_componentWillMount() {
    const { match } = this.props;
    let category = match.path.substr(1);
    if (category.trim() === '') category = 'home';
    this.setState({
      category: category
    })
  }
  render() {
    const { category } = this.state;
    const { authReducer, baseReducer } = this.props;
    const { autheticate: { isAutheticated } } = authReducer;
    const { landing, board } = baseReducer;
    const isHome = category === 'home';

    // match.path
    if (landing) return null;
    return (
      <div>
        <Header
          isHome={isHome}
          onClick={this.handleCategoryMenu}
          category={category}
          isAutheticated={isAutheticated}
          handleLogout={this.handleLogout}
          menuList={board.menuList}
          
        />
      </div>
    );
  }
}

export default connect(
  ({ auth, base }) => ({
    authReducer: auth,
    baseReducer: base,

  })
)(withRouter(HeaderContainer))