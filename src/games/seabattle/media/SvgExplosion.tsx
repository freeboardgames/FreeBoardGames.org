import * as React from 'react';
const d1 = 'M.629.626L.61.852.443.7l-.22.053.091-.207L.042.268l.38.108.184-.375.01.425.341.081z';
const d2 = 'M.627.532L.9.802.531.67.351 1l.02-.386-.17-.088L.37.442.395.251l.132.14.185-.03z';
const SvgExplosion = (props: any) => (
  <g fill="#ed1c24">
    <path d={d1} />
    <path d={d2} />
  </g>
);

export default SvgExplosion;
