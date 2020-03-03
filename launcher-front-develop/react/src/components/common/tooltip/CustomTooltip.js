import React from "react";
import HelpIcon from '@material-ui/icons/Help';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import styled from 'styled-components';
import { color } from 'styles/__utils';

const defaultTheme = createMuiTheme();
const TextOnlyTooltip = withStyles({
  tooltip: {
    color: "black",
    backgroundColor: "transparent",
  }
})(Tooltip);

function CustomTooltip(props) {
  const {
    type, 
    children =<></>,
    title, 
    placement="right-start",
    _style,
    interactive,
    iconStyle} = props;

  const typeIcon = {
    'help': HelpIcon,
  }
  let Icon = typeIcon[type];
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <Styled.CustomTooltip>
        <TextOnlyTooltip 
          title={<Styled.TootipStyle _style={_style}>{title}</Styled.TootipStyle>}
          interactive={interactive}
          placement={placement}
        >
          <span className="tooltip__wapper">
          {children} {Icon ?  
            <Styled.HelpIcon iconStyle={iconStyle}><Icon /></Styled.HelpIcon> 
          : children}
          </span>
        </TextOnlyTooltip>
      </Styled.CustomTooltip>
    </MuiThemeProvider>
  );
}

export default CustomTooltip;

const Styled = {
  CustomTooltip: styled.span`
    display:inline-block;
    .tooltip__wapper{
      display:inline-block;
      
    }
    .help{

    }
  `,
  TootipStyle: styled.span`
    display:inline-block;
    font-size:12px;
    padding:10px;
    background:rgba(0,0,0,.7);
    color:white;
    ${({_style})=> _style && _style};
  `,
  HelpIcon:styled.span`
    position:relative;
    color:${color.gray_icon};
    cursor: pointer;
    font-size:20px;
    ${({iconStyle})=> iconStyle && iconStyle};
  `
}

// const theme = createMuiTheme({
//   overrides: {
//     MuiTooltip: {
//       tooltip: {
//         fontSize: "30px",
//         color: "yellow",
//         backgroundColor: "gray"
//       }
//     }
//   }
// });
// const BlueOnGreenTooltip = withStyles({
//   tooltip: {
//     color: "lightblue",
//     backgroundColor: "green"
//   }
// })(Tooltip);