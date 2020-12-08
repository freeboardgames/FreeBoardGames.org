import * as React from 'react';

import * as CNST from '../constants';

interface IPlayStatus {
    vampiresPlayed: number; 
    villagersPlayed: number; 
    electionCount: number; 
    draculaStrength: boolean;
    vetoEnabled: boolean;
    playerCount: number;
    onItemClick: (itemName: string) => void;
}

const boxWidth = CNST.B_WIDTH * 0.08; 
const strokeWidth = 0.035 / boxWidth;
const margin = strokeWidth * 2;

function RenderSquare(props: any) {

    return (
        <g>
            {props.noRect ? null : (<rect
                key={`sd_${props.xOffset}_score_box_${props.idx}`}
                x={0.1 + props.xOffset + margin + boxWidth * props.idx}
                y={CNST.PI_AREA_HEIGHT + props.yOffset + margin + boxWidth * 0.5}
                width={boxWidth - 2 * margin}
                height={boxWidth - 2 * margin}
                rx={strokeWidth * 1.25}
                style={{
                    stroke: 'white',
                    strokeWidth,
                    fillOpacity: 0,
                }}
            />)}
            <text
                key={`sd_${props.xOffset}_score_text_${props.idx}`}
                x={0.1 + props.xOffset + margin + boxWidth * (props.idx + 0.4)}
                y={CNST.PI_AREA_HEIGHT + props.yOffset + margin + boxWidth * 1.11}
                fontSize={0.6}
                textAnchor="middle"
                fill="white"
            >
                {props.text}
            </text>
        </g>
    );
}

export default function PlayStatus(props: IPlayStatus) {

    // render vampire status 
    const vmPlayed = new Array(6).fill(0).map((_, idx) => (idx < props.vampiresPlayed));
    const vmStatus = vmPlayed.map((s, idx) => {
        return (
            <RenderSquare
                idx={idx}
                xOffset={0.1}
                yOffset={0}
                text={'X'}
            />
        );
    })

    // render villager status 
    const vlPlayed = new Array(5).fill(0).map((_, idx) => (idx < props.villagersPlayed));
    const vlStatus = vlPlayed.map((s, idx) => {
        return (
            <RenderSquare
                idx={idx}
                xOffset={0.1 + boxWidth/2}
                yOffset={boxWidth * 1.125}
                text={'X'}
            />
        );
    });

    // render election status 
    const election = new Array(3).fill(0).map((_, idx) => (idx < props.electionCount));
    const elStatus = election.map((s, idx) => {
        return (
            <RenderSquare
                idx={idx}
                xOffset={CNST.B_WIDTH / 2  + 0.1}
                yOffset={boxWidth}
                text={'X'}
                noRect={true}
            />
        );
    });


    // render general info 

    return (
        <>
            {vmStatus}
            {vlStatus}
            {elStatus}
        </>
    );

}