import React from 'react';
import { IHand, ICard } from '../interfaces';
import { BCard } from './bcard';
import { BHint } from './bhint';
import { BPlay } from './bplay';

interface InnerWrapper {
    hand: IHand ;
    me: boolean ;

    onPlay(id: number): any;
    onTrash(id: number): any;
    myTurn: boolean;
}

export class BHand extends React.Component< InnerWrapper, {}> {
    render() {
        var hand = this.props.hand
        return (
                <div>
                    <tr>
                        { hand.cards.map((card, card_index) => 
                            {
                                // If player, then 'overwrite' the card with the info from the hint
                                const hint =  this.props.hand.hints[card_index]

                                var newCard : ICard

                                if (this.props.me) {
                                    newCard = { id: -1, 
                                                value: hint.value.indexOf(1) !== -1 ? hint.value.indexOf(1) : null,
                                                color: hint.color.indexOf(1) !== -1 ? hint.color.indexOf(1) : -1}
                                } else {
                                    newCard = { id: card.id, value: card.value, color: card.color }
                                }

                                return (
                                    <th key={card}>
                                        <BHint
                                            hint={ hint } >
                                        </BHint>
                                        <BCard 
                                            card={ newCard }
                                            empty = { null } >
                                        </BCard>
                                        { this.props.me 
                                            ? 
                                            <BPlay onPlay={() => {this.props.onPlay(card_index)}} 
                                                   onTrash={() => {this.props.onTrash(card_index)}} 
                                                   myTurn={this.props.myTurn}> 
                                                   </BPlay> 
                                            : 
                                            null
                                        }
                                    </th>
                                )
                            })
                        }
                    </tr>
                </div>
        )
    }
}
