import React from 'react';
import { ICard, IHint } from '../interfaces';

interface InnerWrapper {
    card : ICard, // if null, show back of card. 
    empty: number , // If -1, then 'empty', if 0-4 base color
                    // 'empty' should take precidence, if not null
                    // if -2 then 'backside'
}

export class BCard extends React.Component< InnerWrapper, {}> {
    render() {
        if (!(this.props.empty === null)) {
            // No Real Card Face
            var image: any
            if (this.props.empty === 0) {
                image = require('./media/green.png');
            } else if (this.props.empty=== 1) {
                image = require('./media/gray.png');
            } else if (this.props.empty=== 2) {
                image = require('./media/brown.png');
            } else if (this.props.empty=== 3) {
                image = require('./media/yellow.png');
            } else if (this.props.empty=== 4) {
                image = require('./media/blue.png');
            } else if (this.props.empty=== -1) {
                image = require('./media/empty.png');
            } else if (this.props.empty=== -2) {
                image = require('./media/deck.png');
            }
            return <div className="image">
                        <img src={ image } height="100" width="100"></img>
                    </div>

        }
        // Card
        var image: any
        var color: any
        if (!this.props.card) { // Card is null, so its hidden
            image = require('./media/white.png');
            color = "" 
        } else {
            color = this.props.card.color
            if (color === 0) {
                image = require('./media/green_with.png');
            } else if (color === 1) {
                image = require('./media/gray_with.png');
            } else if (color === 2) {
                image = require('./media/brown_with.png');
            } else if (color === 3) {
                image = require('./media/yellow_with.png');
            } else if (color === 4) {
                image = require('./media/blue_with.png');
            } else if (color === -1) {
                image = require('./media/deck.png');
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