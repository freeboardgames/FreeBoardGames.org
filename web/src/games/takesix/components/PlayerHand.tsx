import * as React from 'react';
import css from './PlayerHand.module.css';
import { IG } from '../game';
import { CardComponent } from './CardComponent';
import Typography from '@material-ui/core/Typography';
import { useCurrentGameTranslation } from 'infra/i18n';

interface IPlayerHandProps {
  G: IG;
  playerID: string;
  selectCard: (index: number) => void;
  disabled?: boolean;
}

export function PlayerHand(props: IPlayerHandProps) {
  const { translate } = useCurrentGameTranslation();
  const _selectCard = (i: number) => () => props.selectCard(i);

  return (
    <div>
      <div style={{ clear: 'both', marginTop: '8px' }}>
        <Typography style={{ color: 'white' }} variant="body2">
          {translate('your_hand')}
        </Typography>
      </div>
      <div
        className={css.PlayerHand}
        style={{
          opacity: props.disabled ? 0.75 : 1,
        }}
      >
        {props.G.players[props.playerID as any].cards.map((card, index: number) => (
          <CardComponent key={card.number} click={_selectCard(index)} card={card} />
        ))}
      </div>
    </div>
  );
}
