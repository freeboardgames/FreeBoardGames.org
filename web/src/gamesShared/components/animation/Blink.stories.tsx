import { Blink } from './Blink';
export default {
  title: 'Games (shared)/Components/Animation/Blink',
};
export const Short = () => (
  <Blink>
    <h1>Some content</h1>
  </Blink>
);
export const Long = () => (
  <Blink totalDurationMillis={60 * 1e3}>
    <h1>Blinking for 1 min</h1>
  </Blink>
);
