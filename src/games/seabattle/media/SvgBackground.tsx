/* tslint:disable */
import * as React from 'react';
const squares = (props: any) => Array.from({ length: 100 }).map((unused, i) => {
  const x = i%10;
  const y = Math.floor(i/10);
  let _onClick = () => {
    props.onClick({ x, y }); 
  };
  return <g
    key={i}  
    onClick={_onClick} 
    transform={`translate(${x}, ${y})`}>
      <rect
        x={0} 
        y={0} 
        fill="red"
        fillOpacity="0"
        width="1" 
        height="1"  
        stroke="white" 
        strokeWidth={0.005} 
      />
    </g>
});
const SvgBackground = (props: any) => (
  <g>
		// .svg starts here
    <defs>
      <linearGradient id="background_svg__a">
        <stop offset={0} stopColor="#203f5c" />
        <stop offset={0.744} stopColor="#00152a" />
        <stop offset={1} stopColor="#020c16" />
      </linearGradient>
      <radialGradient
        xlinkHref="#background_svg__a"
        id="background_svg__b"
        cx={5}
        cy={5}
        fx={5}
        fy={5}
        r={5}
        gradientUnits="userSpaceOnUse"
        spreadMethod="pad"
      />
    </defs>
    <path
      fill="url(#background_svg__b)"
      fillRule="evenodd"
      d="M0 0h10v10H0z"
    />
		// .svg ends here
    {squares(props)}
  </g>
);

export default SvgBackground;

