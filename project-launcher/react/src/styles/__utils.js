import {css} from 'styled-components';
import {_color} from 'styles/__common';

export const color = _color;

export const font = css`
  color:${color.black};
  font-family:"arial";
`;

export const floatClear = css`
  &:after{
    content:'';
    display:block;
    clear: both;
  }
`;

export const positionCenterCenter = css`
  position:absolute;
  left:50%;
  top:50%;
  transform:translate(-50%,-50%);
`;

export const positionWidthCenter = css`
  position:absolute;
  left:50%;
  transform:translateX(-50%);
`;
export const positionHeightCenter = css`
  position:absolute;
  top:50%;
  transform:translateY(-50%);
`;
