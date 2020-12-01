import { from } from 'apollo-boost';
import * as React from 'react';

import { ECardState } from './definations';
import {GRID_SIZE, CARD_CONTENT} from './constants'; 


function OneCard(props: any) {

    const xPos = Math.floor(props.card.id / GRID_SIZE); 
    const yPos = props.card.id % GRID_SIZE;
    const strokeWidth = 0.125 / GRID_SIZE;
    const margin = strokeWidth;
    const adjustment = ( 1 + 1 / GRID_SIZE);

    return (
        <g
            key={`mm_card_group_${props.card.id}`} 
            onClick={()=> {props.onCardClick(props.card.id)}}
        >                
            <image
                key={`mm_card_image_${props.card.id}`} 
                x={xPos + margin * adjustment} 
                y={yPos + margin * adjustment} 
                width={ 1 - 2 * margin * adjustment} 
                height={ 1 - 2 * margin * adjustment }
                href={CARD_CONTENT[props.card.name]}
                style={{
                    ...(props.card.state === ECardState.HIDDEN ? {} : {
                        transformStyle: 'preserve-3d',
                        transition: '0.6s', 
                        transform: 'rotateY(180deg)',
                        position: 'relative'
                        // transformOrigin: '25%'
                    })
                }}
            />
            <rect 
                id={`mm_card_rect_id_${props.card.id}`} 
                key={`mm_card_rect_${props.card.id}`} 
                x={xPos + margin } 
                y={yPos + margin } 
                width={ 1 - 2 * margin } 
                height={ 1 - 2 * margin }
                rx={strokeWidth * adjustment }
                style={{
                    stroke: props.card.state === ECardState.HIDDEN ? "white" : "red", 
                    strokeWidth, 
                    fillOpacity:0, 
                }}
            /> 
        </g>
    )

}

export default function CardGrid(props: any) {

    return (
        <svg width="100%" height="100%" viewBox={`0 0 ${GRID_SIZE} ${GRID_SIZE}`}>
          {props.cards.map((c)=>(<OneCard card={c} onCardClick={props.onCardClick}/>))}
        </svg>
    );
}