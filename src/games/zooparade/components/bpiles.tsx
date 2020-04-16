import React from 'react';
import { ICard } from '../interfaces';
import { BCard } from './bcard';

interface InnerWrapper {
    piles: ICard[][]
}

export class BPiles extends React.Component< InnerWrapper, {}> {
    render() {
        return (
            <div>
            { this.props.piles.map((pile, index) => 
                {
                    if (pile.length === 0) {
                        return <BCard card={ null } empty = {index} >
                            </BCard>
                    }
                    return <BCard 
                        card={ pile[pile.length - 1]}
                        empty={ null }
                        key={ index }
                    ></BCard>
                })
            }
            </div>
        )
    }
}