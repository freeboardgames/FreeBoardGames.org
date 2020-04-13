import React from 'react';
import { ICard, IHint } from '../interfaces';

interface InnerWrapper {
    card : ICard, // if null, show back of card. 
    empty: number , // If -1, then 'empty', if 0-5 base color
                    // 'empty' should take precidence, if not null
}

export class BCard extends React.Component< InnerWrapper, {}> {
    render() {
        // Card
        var image: any
        var color: any
        if (!this.props.card) { // Card is null, so its hidden
            image = require('./media/background.png');
            color = "" 
        } else {
            color = this.props.card.color
            if (color === 0) {
                image = require('./media/elefant.png');
            } else if (color === 1) {
                image = require('./media/giraffe.png');
            } else if (color === 2) {
                image = require('./media/lion.png');
            } else if (color === 3) {
                image = require('./media/parrot.png');
            } else if (color === 4) {
                image = require('./media/manta.png');
            }
        }

        //
        var cardValue = this.props.card ? this.props.card.value : ""

        return (
            <div className="image">
                <img src={image} height="100" width="100"></img>
                <h2> { cardValue } </h2>
            </div>
        )
    }
}

const styles = {
    container: {
      position: 'absolute',
      top: 0,
      left: 0,   
      width: '100%',
      height: '100%',
    },
    image: {  
      flex: 1,  
    }
  };