
// variable, font
// import  { css } from 'styled-components';
import WebFont from 'webfontloader';


WebFont.load({
  google: {
    families: [
      'Titillium Web:300,400,700', 
      'sans-serif',
      'Nanum Gothic',
      'Open Sans Condensed'
    ]
  }
});

const _font={
  "NanumGothic":"Nanum Gothic"
}
const _color ={
  black:'#000',
  white:'#fff',
  orange:'orange',
  borderGray:'#ececec',
  borderGray2:`#f1f1f1`,
  bgGray:'rgb(238, 238, 238)',
  titleBlack:`rgb(82, 82, 82)`,
  red:`rgb(233, 73, 73)`,
  bgBrown:`rgb(45, 45, 45)`,
  redTitle:`#d0021b`,
  graySubtitle:`#888888`,
  blackSubtitle:`#4b4b4b`,
  greenText:`#00a562`

};

export {
  _color,
  _font,
}
