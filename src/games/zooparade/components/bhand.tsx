import React from 'react';
import { IHand, ICard } from '../interfaces';
import { BCard } from './bcard';
import { BHint } from './bhint';
import { BPlay } from './bplay';
import AddressHelper from 'components/App/Helpers/AddressHelper';

interface InnerWrapper {
    hand: IHand ,
    me: boolean 
}

export class BHand extends React.Component< InnerWrapper, {}> {
    render() {
        var hand = this.props.hand
        return (
                <div>
                    <tr>
                        { hand.cards.map((card, index) => 
                            {
                                // If player, then 'overwrite' the card with the info from the hint
                                const hint =  this.props.hand.hints[index]
                                var newCard : ICard = { id: card.id, value: card.value, color: card.color }
                                if (this.props.me) {
                                    newCard.color = hint.color
                                    newCard.value = hint.value
                                }

                                return (
                                    <th>
                                    <BHint
                                        hint={ hint } >
                                    </BHint>
                                    <BCard 
                                        card={ newCard}
                                        empty = { null } >
                                    </BCard>
                                    { this.props.me ?  <BPlay> </BPlay> : null}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </div>
        )
    }
}
