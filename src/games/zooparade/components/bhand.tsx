import React from 'react';
import { IHand } from '../interfaces';
import { BCard } from './bcard';

interface InnerWrapper {
    hand: IHand 
}

export class BHand extends React.Component< InnerWrapper, {}> {
    render() {
        var hand = this.props.hand
        return (
                <div>
                    <tr>
                        { hand.cards.map((value, index) => 
                            {
                                return (
                                    <th>
                                    <BCard 
                                        card={ value }
                                        hint={ this.props.hand.hints[index]}
                                        showhint={ true }
                                    ></BCard>
                                    </th>
                                )
                            })
                        }
                    </tr>
                </div>
        )
    }
}
