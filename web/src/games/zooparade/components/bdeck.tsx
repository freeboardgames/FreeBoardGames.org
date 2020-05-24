import React from 'react';
import { BCard } from './bcard';

interface InnerWrapper {
    cardsLeft: number
}

export class BDeck extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div>
                <BCard 
                    card = { null } empty = { -2 }>
                </BCard>
                <div> { this.props.cardsLeft + 1} </div>
            </div>
        )
    }
}
