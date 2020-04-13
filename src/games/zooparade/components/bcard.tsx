import React from 'react';
import { ICard, IHint } from '../interfaces';
import './bcard.css';
interface InnerWrapper {
    card: ICard
    hint: IHint
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
        var cardValue = this.props.card.value ? this.props.card.value : ""
        var cardColor = this.props.card.value ? this.props.card.value : ""
        // Hint
        var hintValue = this.props.hint.value ? this.props.hint.value : ""
        var hintColor = this.props.hint.color ? this.props.hint.color : ""

        return (
            <div className="image">
                <img src={image}></img>
                <h2> { cardValue } </h2>
                <h3> { hintValue } </h3>
                <h4> { hintColor } </h4>
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