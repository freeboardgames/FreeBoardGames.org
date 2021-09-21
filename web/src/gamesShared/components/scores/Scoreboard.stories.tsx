import { Scoreboard } from './Scoreboard';

export default {
  title: 'Games (shared)/Components/Scores/Scoreboard',
};

const scores = [
  { playerID: '0', score: 100 },
  { playerID: '1', score: 200 },
  { playerID: '2', score: 300 },
];

const scoresExtended = [
  { playerID: '0', score: 100, extraData: [1, 5] },
  { playerID: '1', score: 200, extraData: [2, 10] },
  { playerID: '2', score: 300, extraData: [3, 15] },
];

const extraColumns = ['Foo', 'Bar'];

const players = [
  { playerID: 0, name: 'Bob' },
  { playerID: 1, name: 'Alice' },
  { playerID: 2, name: 'Joe' },
];

export const example = () => <Scoreboard scoreboard={scores} players={players} playerID={'1'} />;
export const extensibleExample = () => (
  <Scoreboard scoreboard={scoresExtended} players={players} playerID={'1'} extraColumns={extraColumns} />
);
