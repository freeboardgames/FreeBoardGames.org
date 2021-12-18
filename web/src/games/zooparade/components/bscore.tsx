import { useCurrentGameTranslation } from 'infra/i18n';
import React from 'react';
import { ICard } from '../interfaces';
import css from './bscore.module.css';

interface ScoreProps {
  piles: ICard[][];
}

export function BScore({ piles }: ScoreProps) {
  const { translate } = useCurrentGameTranslation();

  const score = piles.map((pile) => pile.filter((card) => card !== null).length).reduce((a, b) => a + b, 0);

  return <h3 className={css.text}>{translate('bscore.score', { score })}</h3>;
}
