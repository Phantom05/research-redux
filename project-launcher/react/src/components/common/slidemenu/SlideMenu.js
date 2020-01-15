import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import cx from 'classnames';


const directionRightLeftBorderSize = 'width:1px;height:80%;';
const directionTopBottomBorderSize = 'width:80%;height:1px;';
function slideBoxConfig({ itemWidth, itemHeight, itemSpace, disable }) {
  return {
    borderSize(direction) {
      if (direction === 'right' || direction === 'left') {
        return directionRightLeftBorderSize
      }
      if (direction === 'top' || direction === 'bottom') {
        return directionTopBottomBorderSize
      }
    },
    defaultBorderSize(direction) {
      if (direction === 'right' || direction === 'left') {
        return `width:1px;height:100%`
      }
      if (direction === 'top' || direction === 'bottom') {
        return `width:100%;height:1px`
      }
    },
    itemSideBorder(direction) {
      return `border:1px solid #ddd`

      // if(type === 'circle'){
      //   return `border:1px solid #ddd`
      // }
      // if (direction === 'right' || direction === 'left') {
      //   return `border-top:1px solid #DDDDDD;
      //           border-bottom:1px solid #DDDDDD;`
      // }
      // if (direction === 'top' || direction === 'bottom') {
      //   return `border-left:1px solid #DDDDDD;
      //           border-right:1px solid #DDDDDD;`
      // }
    },
    checkOpenMenu(direction = 'right', itemLen = 0) {

      let styles = '';
      for (let i = 0; i <= itemLen; i++) {
        let translade3d, directionMargin;
        if (direction === 'right') {
          translade3d = `${(itemWidth * i)}px,0,0`;
          directionMargin = itemWidth;
        }
        if (direction === 'left') {
          translade3d = `-${(itemWidth * i)}px,0,0`;
          directionMargin = itemWidth;
        }
        if (direction === 'bottom') {
          translade3d = `0,${itemHeight * i + (itemSpace * i)}px,0`;
          directionMargin = itemHeight;
        }
        if (direction === 'top') {
          translade3d = `0,-${(itemHeight * i)}px,0`;
          directionMargin = itemHeight;
        }
        styles += `
        &:nth-child(${i + 2}){
          transition-duration:90ms+${(directionMargin * i)}ms;
          transform:translate3d(${translade3d});
        }
        `
      }
      return css`${styles}`;


    },
    slideBox(direction = 'right') {
      const absouluteConfig = {
        right: `
          transform:translateY(-50%);
          top:50%;
          left:calc(100% - 1px);
          ${directionRightLeftBorderSize}`,
        left: `
          transform:translateY(-50%);
          top:50%;
          left:0%;
          ${directionRightLeftBorderSize}`,
        top: `
          transform:translateX(-50%);
          top:0;
          left:50%;
          ${directionTopBottomBorderSize}`,
        bottom: `
          transform:translateX(-50%);
          top:calc(100% - 1px);
          left:50%;
          ${directionTopBottomBorderSize}`
      }
      return css`
        display:inline-block;
        background:#fff;
        width:${props => props.slideBoxWidth}px;
        height:${props => props.slideBoxHeight}px;
        position:absolute;
        color:#fff;
        text-align:center;
        transform:translate3d(0,0,0);
        transition:transform ease-out 200ms;
    
        &:after{
          ${props => props.borderLine && `
            display:block;
            content:'';
            position:absolute;
            background:#DDDDDD;
            ${absouluteConfig[direction]};
            clear: both;
          `}
        }
        &:last-child:after{
          background:transparent;
        }
      `
    },
    centerPositionAbsoulute() {
      return css`
        position:absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-50%);
      `
    }
  }
}
const Styled = {
  SlideMenu: styled.div`
    ${props=>props.disable && `opacity:0.5`}
    .menu{
      display: inline-block;
      position:relative;
      width:${props => props.slideBoxWidth}px;
      height:${props => props.slideBoxHeight}px;
      clear: both;
    }
    .menu_controller{
      ${props => props.slideBoxConfig.centerPositionAbsoulute()};
    }
    .menu-open{
      display:none;
    }
    .menu-icon{
      ${props => props.slideBoxConfig.centerPositionAbsoulute()};
    }
    .menu-item{
      ${props => props.slideBoxConfig.slideBox(props.direction)};
      ${props => props.slideBoxConfig.itemSideBorder(props.direction)};
      cursor: pointer;
      &:last-child{
        ${props => `border-${props.direction}:1px solid #ddd`};
      }
      &:hover{
        background:rgba(255,255,255,.4);
      }
      left:0;
      top:0;
      ${props => props.type === 'circle' && `border-radius:100%`};
    }
    .menu-open-button{
      ${props => props.slideBoxConfig.slideBox(props.direction)}
      z-index:2;
      transition-timing-function:cubic-bezier(0.175, 0.885, 0.320, 1.275);
      transition-duration:400ms;
      cursor:pointer;
      border:${props => props.borderLabel ? props.borderLabel : `1px solid #ddd`};
      /* ${props => props.type === 'circle' ? null : `border-${props.direction}:0;`}; */
      left:0;
      top:0;
      ${props => props.type === 'circle' && `border-radius:100%`};
      &:after{
        ${props => props.slideBoxConfig.defaultBorderSize(props.direction)};
      }
    }
    .menu-open:checked+.menu-open-button{
      transition-timing-function:linear;
      transition-duration:200ms;
      transform: translate3d(0,0,0);
      transition:.3s;
      &:after{
        ${props => props.slideBoxConfig.borderSize(props.direction)};
        ${props => props.borderLine ? props.borderLine : `border-${props.direction}:0;`};
        transition:.3s;
      }

    }
    .menu-open:checked~.menu-item{

      transition-timing-function:cubic-bezier(0.165, 0.840, 0.440, 1.000);
      ${props => props.slideBoxConfig.checkOpenMenu(props.direction, props.itemLen)};
      left:0;
      top:0;
    }
    img{
      width:40px;
    }
  `
}

/**
 *        className="navigation__bottom_btn"
  label={<img src={images.common_project} alt="project button" />}
  direction="bottom"
  itemList={itemList}
  // clickItem={handleEditSlideMenuClick}
  itemWidth={60}
  itemHeight={60}
  // borderLine={false}
  type="circle"
  itemClassName='itemClassName'
 */
class SlideMenu extends PureComponent {
  state = {
    didLoad: false
  }
  onLoad = () => {
    this.setState({
      didLoad: true
    })
  }
  render() {
    const {
      direction,
      itemList,
      label,
      clickItem,
      itemWidth = 60,
      itemHeight = 60,
      borderLabel,
      borderLine,
      type,
      itemClassName,
      itemSpace,
      disable
    } = this.props;


    const style = this.state.didLoad ? {} : { visibility: 'hidden' }
    return (
      <Styled.SlideMenu
        disable={disable}
        direction={direction}
        itemLen={itemList.length}
        slideBoxWidth={itemWidth}
        slideBoxHeight={itemHeight}
        slideBoxConfig={slideBoxConfig({ itemSpace, itemWidth, itemHeight, disable })}
        borderLabel={borderLabel}
        borderLine={borderLine}
        type={type}
        itemClassName={itemClassName}
        itemSpace={itemSpace}
      >
        <nav className="menu" style={style} onLoad={this.onLoad}>
          <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" disabled={disable}/>
          <label className={cx('menu-open-button', itemClassName)} htmlFor="menu-open" >
            <span className="menu-icon">{label}</span>
          </label>
          {itemList.map(
            info => (
              <span className={cx('menu-item', itemClassName)} key={info.id} onClick={() => clickItem && clickItem(info.id)}>
                <span className="menu-icon" >{info.content}</span>
              </span>
            )
          )}
        </nav>
      </Styled.SlideMenu>
    );
  }
}

export default SlideMenu;
// 클릭했을때, opacity 0.8;

SlideMenu.defaultProps = {
  itemList: [],
  itemClick: () => { }
}

