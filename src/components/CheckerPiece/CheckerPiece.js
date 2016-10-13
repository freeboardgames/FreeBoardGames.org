import React from 'react'

export const CheckerPiece = ({color, double=false, x=1, y=1}) => {
  let star = null;
  if (double == true) {
    star = (<polygon stroke="#000000" points="50,33.034549713134766 53.87126159667969,44.171669006347656 65.65957641601562,44.411895751953125 56.263832092285156,51.535240173339844 59.67815017700195,62.820831298828125 50,56.086181640625 40.32184982299805,62.820831298828125 43.736167907714844,51.535240173339844 34.340423583984375,44.411895751953125 46.12873840332031,44.171669006347656 50,33.034549713134766 53.87126159667969,44.171669006347656 " strokeWidth="3"  fill="#000000" orient="point" r="16.465452" shape="star" cy="48.5" cx="49"/>);
  }
  return (
    <g transform={"translate("+y+","+x+")"}>
      <g transform="scale(.01,.01)">
        <ellipse ry="45" rx="45" cy="50" cx="50" strokeWidth="0" stroke="#000000" fill={color}/>
        <ellipse ry="35" rx="35" cy="50" cx="50" strokeWidth="5" stroke="#000000" fill={color}/>
        <ellipse ry="20" rx="20" cy="50" cx="50" strokeWidth="3" stroke="#000000" fill={color}/>
        {star}
      </g>
    </g>
  );
};


export default CheckerPiece
