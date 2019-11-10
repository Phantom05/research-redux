
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
  bgGray:'rgb(238, 238, 238)',
  titleBlack:`rgb(82, 82, 82)`,
  red:`rgb(233, 73, 73)`,
  bgBrown:`rgb(45, 45, 45)`,
  redTitle:`#d0021b`,
  graySubtitle:`#888888`

}

export {
  _color,
  _font
}
