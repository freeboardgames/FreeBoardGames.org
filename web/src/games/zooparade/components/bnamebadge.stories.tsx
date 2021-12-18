import { BNameBadge } from './bnamebadge';
import { gameDecorator } from '../decorators/game';
export default {
  title: 'Games/Zoo Parade/Components/Name Badge',
  decorators: [gameDecorator],
};
export const FooTurn = () => <BNameBadge name={'foo'} turn={true} />;
export const NotFooTurn = () => <BNameBadge name={'foo'} turn={false} />;
