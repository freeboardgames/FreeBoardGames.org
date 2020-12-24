import React, { FunctionComponent } from 'react';
import { IScoreKeeper } from './game';
import './CribbageBoard.module.css';

type CribbageBoardProps = {
  scoreKeeper: IScoreKeeper;
  name: string;
};

const CribbageBoard: FunctionComponent<CribbageBoardProps> = ({ scoreKeeper }: CribbageBoardProps) => {
  let { north, south } = scoreKeeper;

  return (
    <div className="cribbage-board">
      <h4>
        North: {north.front} ({north.back}) Games: {north.games}
      </h4>
      <h4>
        South: {south.front} ({south.back}) Games: {south.games}
      </h4>
      <h4>{`Type "." for command console.`}</h4>
    </div>
  );
};

export default CribbageBoard;
