import  { css } from 'styled-components';
import {_color,_font} from 'styles/base/_common'; // 꼭 있어야함.


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



export {
  positionCenterCenter,
  positionHeightCenter,
  positionWidthCenter,
  font
}