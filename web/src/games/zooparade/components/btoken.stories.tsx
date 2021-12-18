import { BToken } from './btoken';
import { gameDecorator } from '../decorators/game';
export default {
  title: 'Games/Zoo Parade/Components/Token',
  decorators: [gameDecorator],
};
export const With3CountdownsAnd2Treats = () => <BToken countdown={3} treats={2} />;
