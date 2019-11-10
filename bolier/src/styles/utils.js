import  { css } from 'styled-components';
import {_color,_font} from 'styles/_common'; 


var color = _color;
var fontFamily = _font;

var font = css`
  font-family:${_font.NanumGothic};
  font-size:14px;
  font-weight:400;
`

var positionCenterCenter = css`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`;

var positionHeightCenter = css`
  position:absolute;
  top:50%;
  transform:translateY(-50%);
`;
var positionWidthCenter = css`
  position:absolute;
  left:50%;
  transform:translateX(-50%);
`;


function smoothBottomLine(borderColor = color.orange,height = '2px'){
  return css`
    position:relative;
    &:after{
        position:absolute;
        content:'';
        width:0%;
        right:0;
        bottom:-4px;
        height:${height};
        transition:.5s;
        background:${borderColor};
    }
    &:hover:after{
      transition:.5s;
      width:100%;
      left:0
    }
  `
};

var floatClear = css`
  &:after{
    content:'';
    display:block;
    clear: both;
  }
`


export {
  positionCenterCenter,
  positionHeightCenter,
  positionWidthCenter,
  smoothBottomLine,
  floatClear,
  font,
  fontFamily,
  color
}