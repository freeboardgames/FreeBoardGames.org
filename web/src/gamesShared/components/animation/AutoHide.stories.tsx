import { AutoHide } from './AutoHide';

export default {
  title: 'Games (shared)/Components/Animation/AutoHide',
};

export const short = () => (
  <AutoHide>
    <h1>Hiding in 2 seconds</h1>
  </AutoHide>
);
export const long = () => (
  <AutoHide totalDurationMillis={60 * 1e3}>
    <h1>Hiding in 1 minute</h1>
  </AutoHide>
);
