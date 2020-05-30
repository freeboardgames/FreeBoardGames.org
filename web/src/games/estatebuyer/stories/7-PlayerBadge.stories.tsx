import React from 'react';
import { PlayerBadge, IPlayerBadgeProps } from '../PlayerBadge';

export default {
  title: 'Games/EstateBuyer/PlayerBadge',
  component: PlayerBadge,
};

const playerBadgeData:IPlayerBadgeProps = {
  playerID: 1,
  name: "Ryan",
  active: false,
  self: false,
  score: {
      playerID: "1",
      score: 10000,
      bid: 0,
      passed: false,
  },
  color: "blue",
}

export const Default = () => <PlayerBadge {...playerBadgeData} />;

export const Self = () => <PlayerBadge {...{...playerBadgeData, self: true}} />;

export const Active = () => <PlayerBadge {...{...playerBadgeData, active: true}} />;

export const Passed = () => <PlayerBadge {...{...playerBadgeData, score: {...playerBadgeData.score, passed: true, bid: 6}}} />;

export const Bid6 = () => <PlayerBadge {...{...playerBadgeData, score: {...playerBadgeData.score, bid: 6}}} />;

export const Bid12 = () => <PlayerBadge {...{...playerBadgeData, score: {...playerBadgeData.score, bid: 12}}} />;

export const MrLongName = () => <PlayerBadge {...{...playerBadgeData, name: "Thisisareallylongnameandwewanttocheckoverflow"}} />;

export const HighScore = () => <PlayerBadge {...{...playerBadgeData, score: {...playerBadgeData.score, score: 84000}}} />;