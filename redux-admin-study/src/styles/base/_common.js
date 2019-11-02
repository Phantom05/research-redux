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
  red:'red'
}

export {
  _color,
  _font
}
