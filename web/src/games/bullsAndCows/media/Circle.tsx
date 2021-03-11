import React from 'react';
interface SvgProps {
  className: string;
  fill: string;
}
const SvgCircle = ({ className, fill }: SvgProps) => (
  <svg className={className} fill={fill} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
  </svg>
);

export default SvgCircle;
