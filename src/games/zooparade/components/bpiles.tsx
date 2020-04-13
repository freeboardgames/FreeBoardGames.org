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
                        return <BCard card={ null } hint={ null } showhint={ null } >
                            </BCard>
                    }
                    return <BCard 
                        card={ pile[pile.length - 1]}
                        hint={ null }
                        showhint={ false }
                    ></BCard>
                })
            }
            </div>
        )
    }
}