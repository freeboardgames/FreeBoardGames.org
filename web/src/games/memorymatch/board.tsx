import * as React from 'react';
import { GameLayout } from 'gamesShared/components/fbg/GameLayout';
import { isOnlineGame, isAIGame } from '../../gamesShared/helpers/gameMode';

import Typography from '@material-ui/core/Typography';
import { IBoardProps, IBoardState } from './definations';
import CardGrid from './grid';


export class MemoryMatchBoard extends React.Component<IBoardProps, IBoardState> {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {

        if (this.props.ctx.gameover) {
            return (
              <GameLayout
                gameOver={'xx'}
                extraCardContent={'yy'}
                gameArgs={this.props.gameArgs}
              />
            );
          }
          return (
            <GameLayout gameArgs={this.props.gameArgs}>
                <div style={{backgroundColor: 'black'}}>
                    <Typography 
                        variant="h5" 
                        style={{ textAlign: 'center', color: 'white', marginBottom: '16px' }}
                    >
                        {'some message'}
                    </Typography>
                    <CardGrid 
                        cards={this.props.G.cards} 
                        onCardClick={(cardId: number) => { this.props.moves.cardClicked(cardId)}} 
                    />
                </div>
            </GameLayout>
          );
    }
}

