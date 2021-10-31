import { GameInstructionsText } from './GameInstructionsText';
export default {
  title: 'Infrastructure/Game Info/GameInstructionsText',
};
const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
export const example = () => <GameInstructionsText text={text} />;
