import React from 'react';
import { IScore, IScoreboardProps, Scoreboard } from '../Scoreboard';

export default {
  title: 'Games/EstateBuyer/Scoreboard',
  component: Scoreboard,
};

const scoreboardData:IScoreboardProps = {
    scoreboard: [
        {
            playerID: "0",
            score: 40,
        },
        {
            playerID: "1",
            score: 30,
        },
        {
            playerID: "2",
            score: 12,
        },
    ],
    players: [
        {
            playerID: 0,
            name: "Jimmy",
        },
        {
            playerID: 1,
            name: "Karen",
        },
        {
            playerID: 2,
            name: "Lloyd",
        }
    ],
    playerID: "0"
}

export const ThreePlayer = () => <Scoreboard {...scoreboardData} />;
