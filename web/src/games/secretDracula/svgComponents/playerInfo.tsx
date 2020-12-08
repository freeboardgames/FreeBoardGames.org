import * as React from 'react';

import * as CNST from '../constants';


export interface IPlayerInfo {
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
    phaseName: string;
    isInvestigated: boolean;
    chose: (pInfo: any) => void;
}

function getPhaseRelatedInfoSymbol(pInfo: IPlayerInfo) {

    switch (pInfo.phaseName) {
        case 'phaseChosePriest':
            if (!pInfo.mayor && !pInfo.dead) {
                return CNST.SY_CANDIDATE;
            }
            break;
        case 'phaseVotePriest': 
            if (pInfo.priest){
                return CNST.SY_CANDIDATE;
            }
            break; 
        case 'phaseInvestigate1': 
            if (!pInfo.mayor && !pInfo.dead) {
                return CNST.SY_SEARCH;
            }
            break;
        case 'phaseInvestigate2':
            if(pInfo.isInvestigated){
                return CNST.SY_SEARCH;
            } 
            break;
        case 'phaseSpecialElection': 
        case 'phaseExecution':
            if (!pInfo.mayor && !pInfo.dead) {
                return CNST.SY_CANDIDATE;
            }
            break;
    }


    return null;
  }

export function PlayerInfo(props: IPlayerInfo) {

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
    const phaseSymbol = getPhaseRelatedInfoSymbol(props); 
    if (phaseSymbol){
        symbols.push(phaseSymbol);
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
    const profileTranslate = `translate(${boxWidth * (symbols.length > 0 ? -0.17 : 0)},0)`;
    const profileStyle = { transition: '0.6s' };

    return (
        <g
            key={`sd_player_info_group_${props.id}`}
            onClick={() => {props.chose(props)}}
        >

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
                x={xPos + boxWidth * 0.5}
                y={yPos + boxHeight * 0.55}
                fontSize={0.9}
                textAnchor="middle"
                transform={profileTranslate}
                style={profileStyle}
            >
                {profilePic}
            </text>

            {
                (props.dracula && props.renderForVampire) ? (
                    <text
                        key={`sd_p_${props.id}_crone`}
                        x={xPos + boxWidth * 0.5 }
                        y={yPos + boxHeight * 0.28}
                        fontSize={boxHeight * 0.18}
                        textAnchor="middle"
                        transform={profileTranslate}
                        style={profileStyle}
                    >{CNST.SY_DRACULA}</text>
                ): null
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

        </g>
    );
}; 