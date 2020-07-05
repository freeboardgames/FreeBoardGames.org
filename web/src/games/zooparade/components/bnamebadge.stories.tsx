import { BNameBadge } from './bnamebadge';

export default {
  title: 'Games/Hanabi/Components/Name Badge',
};

export const FooTurn = () => <BNameBadge name={'foo'} turn={true} />;

export const NotFooTurn = () => <BNameBadge name={'foo'} turn={false} />;
