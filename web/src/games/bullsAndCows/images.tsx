import * as React from 'react';
import SvgCertificate from './media/Certificate';
import SvgCircle from './media/Circle';
import SvgHeart from './media/Heart';
import SvgMoon from './media/Moon';
import SvgPlay from './media/Play';
import SvgSquare from './media/Square';
import SvgStar from './media/Star';

interface ImageProps {
  img: string;
  hex: string;
  className?: string;
}
export const Image = ({ img, hex, className }: ImageProps) => {
  switch (img) {
    case 'certificate':
      return <SvgCertificate className={className} fill={hex} />;
      break;
    case 'circle':
      return <SvgCircle className={className} fill={hex} />;
      break;
    case 'heart':
      return <SvgHeart className={className} fill={hex} />;
      break;
    case 'moon':
      return <SvgMoon className={className} fill={hex} />;
      break;
    case 'play':
      return <SvgPlay className={className} fill={hex} />;
      break;
    case 'square':
      return <SvgSquare className={className} fill={hex} />;
      break;
    case 'star':
      return <SvgStar className={className} fill={hex} />;
      break;
    default:
      return <div />;
      break;
  }
};
