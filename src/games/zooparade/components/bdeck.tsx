import React from 'react';
import { ICard, IHint } from '../interfaces';
import { BCard } from './bcard';

interface InnerWrapper {
    cardsLeft: number
}

export class BDeck extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div>
                <BCard 
                    card = { null } empty = { null }>
                </BCard>
                <div> { this.props.cardsLeft + 1} </div>
            </div>
        )
    }
}
