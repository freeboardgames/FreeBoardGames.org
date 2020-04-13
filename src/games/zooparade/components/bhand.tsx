import React from 'react';
import { IHand } from '../interfaces';
import { BCard } from './bcard';

import './bcard.css';
interface InnerWrapper {
    hand: IHand 
}

export class BHand extends React.Component< InnerWrapper, {}> {
    render() {
        var hand = this.props.hand
        return (
            <div>
            { hand.cards.map((value, index) => 
                {
                    return <BCard 
                        card={ value }
                        hint={ this.props.hand.hints[index]}
                    ></BCard>
                })
            }
            </div>
        )
    }
}