import React from 'react';
import { ICard } from '../interfaces';

interface InnerWrapper {
    card : ICard, // if null, show back of card. 
    empty: number , // If -1, then 'empty', if 0-4 base color
                    // 'empty' should take precidence, if not null
                    // if -2 then 'backside'
}

export class BCard extends React.Component< InnerWrapper, {}> {
    render() {
        var cardValue: string
        var image: any
        if (this.props.empty !== null) {
            // No Real Card Face
            cardValue = "";
            switch (this.props.empty) {
              case 0:
                image = require('./media/green.png');
                break;
              case 1:
                image = require('./media/gray.png');
                break;
              case 2:
                image = require('./media/brown.png');
                break;
              case 3:
                image = require('./media/yellow.png');
                break;
              case 4:
                image = require('./media/blue.png');
                break;
              case -1:
                image = require('./media/empty.png');
                break;
              case -2:
                image = require('./media/deck.png');
                break;
            }
        } else if (!this.props.card) {
            // Card is null, so its hidden
            cardValue = ""
            image = require('./media/white.png');
        } else {
            cardValue = String(this.props.card.value !== null ? this.props.card.value : "");
            switch (this.props.card.color) {
              case 0:
                image = require('./media/green_with.png');
                break;
              case 1:
                image = require('./media/gray_with.png');
                break;
              case 2:
                image = require('./media/brown_with.png');
                break;
              case 3:
                image = require('./media/yellow_with.png');
                break;
              case 4:
                image = require('./media/blue_with.png');
                break;
              case -1:
                image = require('./media/deck.png');
                break;
            }
        }

        return (
            <div 
              className="image"
              style = {{
                        width: '56px',
                        height: '88.9px',
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        overflow: 'hidden',
                        background: `url(${image}) no-repeat center / contain`,
                        padding: '5px 9px',
                        fontSize: '1.8em',
                        fontWeight: 'bold',
                        color: '#572511',
                        textAlign: 'right'
              }}
              >
                { cardValue }
            </div>
        )
    }
}

// const styles = {
//     container: {
//       position: 'absolute',
//       top: 0,
//       left: 0,   
//       width: '100%',
//       height: '100%',
//     },
//     image: {  
//       flex: 1,  
//     }
//   };