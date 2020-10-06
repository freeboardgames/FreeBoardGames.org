import React from 'react';
import { ICard } from '../interfaces';
import css from './bdeck.css';

interface InnerWrapper {
  piles: ICard[][];
}

function getTop(pile: ICard[]): number{
    // I'm so good at Typescript!
    if (pile[0] == null) {
        return 0
    }
    if (pile[1] == null) {
        return 1
    }
    if (pile[2] == null) {
        return 2
    }
    if (pile[3] == null) {
        return 3
    }
    if (pile[4] == null) {
        return 4
    }

    return 5
}
export class BScore extends React.Component<InnerWrapper, {}>{
    render(){
        var score = this.props.piles.map((pile) => {return getTop(pile)})
                                    .reduce( (a, b) =>  a+b, 0)

        return(
            <div className={css.wrapper}>
                <h2 className={css.text}> Score : {score}</h2>
            </div>
        )
    }
}