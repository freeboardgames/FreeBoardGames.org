import * as React from 'react';

import * as CNST from '../constants';


interface IPlayerInfo {
    id: number;
    me: boolean;
    renderForVampire: boolean;
    playerName: string;
    playerActive: boolean;
    dead: boolean;
    vampire: boolean;
    dracula: boolean;
    mayor: boolean;
    priest: boolean;
    totalPlayers: number;
    chose: (id: number) => void;
}

export default function PlayerInfo(props: IPlayerInfo) {

    const xLen = Math.ceil(props.totalPlayers/2);
    const boxWidth = CNST.B_WIDTH / xLen; 
    const xPos = Math.floor(props.id / 2) * boxWidth;
    
    const yLen = 2;
    const boxHeight = CNST.PI_AREA_HEIGHT / yLen;
    const yPos = (props.id % yLen) * boxHeight;
    const strokeWidth = 0.125 / boxWidth;
    const margin = strokeWidth;

    // setup profile pic 
    const humanPic = CNST.SY_HUMANS[props.id % CNST.SY_HUMANS.length];
    const profilePic = props.me ? (props.vampire ? CNST.SY_VAMPIRE : humanPic) : (props.renderForVampire && props.vampire ? CNST.SY_VAMPIRE : humanPic);

    // setup additional symbols 
    const symbols = []; 
    if (props.playerActive){
        symbols.push('🕒'); 
    }
    if (props.mayor) {
        symbols.push(CNST.SY_MAYOR);
    } else if (props.priest) {
        symbols.push(CNST.SY_PRIEST);
    }

    // trim name if required 
    const nameLength = Math.ceil((CNST.PI_MIN_NAME_SIZE * 5) / Math.ceil(props.totalPlayers/2));
    let playerName = props.playerName;
    if (playerName.length > nameLength){
        playerName = playerName.slice(0, CNST.PI_MIN_NAME_SIZE) + '.';
    }
    const nameOffset = boxWidth * (symbols.length > 0 ? 0.33 : 0.5);

    return (
        <g
            key={`sd_player_info_group_${props.id}`}
        >
            <rect
                key={`temp_XXX`}
                x={0}
                y={0}
                width={CNST.B_WIDTH}
                height={CNST.B_HEIGHT}
                rx={0.01}
                style={{
                    stroke: 'white',
                    strokeWidth,
                    fillOpacity: 0,
                }}
            />

            <rect
                key={`sd_player_info_rect_${props.id}`}
                x={xPos + margin}
                y={yPos + margin}
                width={boxWidth - 2 * margin}
                height={boxHeight - 2 * margin}
                rx={strokeWidth * 1.25}
                style={{
                    stroke: 'white',
                    strokeWidth,
                    fillOpacity: 0,
                }}
            />

            <text
                key={`sd_player_pic_${props.id}`}
                x={xPos + nameOffset}
                y={yPos + boxHeight * 0.55}
                fontSize={0.9}
                textAnchor="middle"
            >
                {profilePic}
            </text>

            {
                (props.dracula && props.renderForVampire) ? (
                    <text
                        key={`sd_p_${props.id}_crone`}
                        x={xPos + nameOffset }
                        y={yPos + boxHeight * 0.28}
                        fontSize={boxHeight * 0.18}
                        textAnchor="middle"
                    >{CNST.SY_DRACULA}</text>
                ): null
            }

            {
                symbols.map((s, sID) => (
                    <text
                        key={`sd_p_${props.id}_symbol_${sID}`}
                        x={xPos + boxWidth * 0.75}
                        y={yPos + boxHeight * 0.25 * (1.25 + sID) }
                        fontSize={boxHeight * 0.18}
                        textAnchor="middle"
                    >{s}</text>
                ))
            }

            <text
                key={`sd_pName_${props.id}`}
                x={xPos + boxWidth/2}
                y={yPos + boxHeight * 0.85 }
                fontSize={0.4}
                textAnchor="middle"
                fill='white'
            >
                {playerName}
            </text>



        </g>
    );
}; 