import { PlayerBadges } from './PlayerBadges';

export default {
  title: 'Games (shared)/Components/Badges/PlayerBadges',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
};

const scores = [
  { playerID: '0', score: 100 },
  { playerID: '1', score: 200 },
  { playerID: '2', score: 300 },
];

const players = [
  { playerID: 0, name: 'Bob' },
  { playerID: 1, name: 'Alice' },
  { playerID: 2, name: 'Joe' },
];

export const WithScore = () => (
  <PlayerBadges
    scores={scores}
    players={players}
    playerID={'1'}
    ctx={{ currentPlayer: '1', activePlayers: null } as any}
  />
);

export const WithoutScore = () => (
  <PlayerBadges players={players} playerID={'1'} ctx={{ currentPlayer: '1', activePlayers: null } as any} />
);

export const WaitingForMany = () => (
  <PlayerBadges
    players={players}
    playerID={'1'}
    ctx={{ currentPlayer: '0', activePlayers: { '0': null, '2': null } } as any}
  />
);
