import * as React from 'react';
import { blue } from '@material-ui/core/colors';

import textCSS from './textStyles.css';
import * as CNST from '../constants';

const boxWidth = CNST.B_WIDTH * 0.09;
const strokeWidth = 0.035 / boxWidth;
const margin = strokeWidth * 2;

interface ITextSquare {
  keyText: string;
  idx: number;
  xOffset: number;
  yOffset: number;
  text: string[];
  fontSize: number[];
  vertical?: boolean;
  noRect?: boolean;
  textAnchor?: string;
  rectBorder?: string;
  onClick: () => void;
}

function RenderTextSquare(props: ITextSquare) {
  const rectX = props.xOffset + margin + boxWidth * props.idx;
  const rectY = CNST.PI_AREA_HEIGHT + props.yOffset + margin;
  const textX = props.xOffset + margin + boxWidth * (props.idx + 0.4);
  const textY = CNST.PI_AREA_HEIGHT + props.yOffset + margin + boxWidth * 0.6;
  const marginTop = 0.125;

  return (
    <g
      onClick={() => {
        props.onClick();
      }}
    >
      {props.noRect ? null : (
        <rect
          key={`sd_${props.keyText}_score_box_${props.idx}`}
          x={props.vertical ? rectY : rectX}
          y={(props.vertical ? rectX : rectY) + marginTop}
          width={boxWidth - 2 * margin}
          height={boxWidth - 2 * margin}
          rx={strokeWidth * 1.25}
          style={{
            stroke: props.rectBorder || 'white',
            strokeWidth,
            fillOpacity: 0,
          }}
        />
      )}
      {props.text.map((t, idx) => (
        <text
          key={`sd_${props.keyText}_score_text_${props.idx}_${idx}`}
          className={textCSS.noselect}
          x={props.vertical ? textY : textX}
          y={(props.vertical ? textX : textY) + marginTop}
          fontSize={props.fontSize[idx]}
          textAnchor={props.textAnchor || 'middle'}
          fill="white"
        >
          {t}
        </text>
      ))}
    </g>
  );
}

function getVampirePolicyExtras(playerCount: number) {
  const _first = () => {
    if (playerCount >= 9) {
      return CNST.SY_INVESTG;
    }
    if (playerCount < 3) {
      return null;
    }
    return null;
  };
  const _second = () => {
    if (playerCount >= 7) {
      return CNST.SY_INVESTG;
    }
    if (playerCount < 3) {
      return null;
    }
    return null;
  };
  const _third = () => {
    if (playerCount >= 7) {
      return CNST.SY_ELECT;
    }
    if (playerCount < 3) {
      return CNST.SY_PEEK;
    }
    return CNST.SY_PEEK;
  };
  const _fourth = () => {
    if (playerCount < 3) {
      return CNST.SY_PEEK;
    }
    return CNST.SY_EXECUTE;
  };

  const _fifth = () => {
    if (playerCount < 3) {
      return CNST.SY_PEEK;
    }
    return CNST.SY_EXECUTE;
  };

  return [_first(), _second(), _third(), _fourth(), _fifth(), CNST.SY_COFFIN];
}

interface IPlayStatus {
  vampiresPlayed: number;
  villagersPlayed: number;
  electionCount: number;
  draculaStrength: boolean;
  vetoEnabled: boolean;
  playerCount: number;
  onItemClick: (hintKey: string) => void;
}

export default function PlayStatus(props: IPlayStatus) {
  // render vampire status
  const vmPhases = getVampirePolicyExtras(props.playerCount);
  const vmPlayed = new Array(6).fill(0).map((_, idx) => idx < props.vampiresPlayed);
  const vmStatus = vmPlayed.map((s, idx) => {
    return (
      <RenderTextSquare
        key={`sd_rt_vampire_${idx}`}
        keyText="vampire"
        idx={idx}
        xOffset={CNST.B_WIDTH / 2 - 3 * boxWidth}
        yOffset={boxWidth * 0.15}
        text={s ? [CNST.SY_BAD_PO] : [vmPhases[idx]]}
        rectBorder={s ? 'red' : 'white'}
        fontSize={[0.45]}
        onClick={() => {
          props.onItemClick('vampirePolicy');
        }}
      />
    );
  });

  // render villager status
  const vlPlayed = new Array(5).fill(0).map((_, idx) => idx < props.villagersPlayed);
  const vlStatus = vlPlayed.map((s, idx) => {
    return (
      <RenderTextSquare
        key={`sd_rt_villagers_${idx}`}
        keyText="villagers"
        idx={idx}
        xOffset={CNST.B_WIDTH / 2 - 2.5 * boxWidth}
        yOffset={boxWidth * 1.3}
        text={[s ? CNST.SY_GOOD_PO : '']}
        rectBorder={s ? blue[500] : 'white'}
        fontSize={[0.5]}
        onClick={() => {
          props.onItemClick('villagerPolicy');
        }}
      />
    );
  });

  // render election status
  const election = new Array(3).fill(0).map((_, idx) => idx < props.electionCount);
  const elStatus = election.map((s, idx) => {
    return (
      <RenderTextSquare
        key={`sd_rt_election_${idx}`}
        keyText="election"
        idx={idx}
        xOffset={5.15 - 0.23 * idx}
        yOffset={CNST.B_WIDTH * 0.35}
        text={['🗳️', s ? '❌' : '']}
        fontSize={[0.6, 0.45]}
        noRect={true}
        vertical={true}
        onClick={() => {
          props.onItemClick('electionCounter');
        }}
      />
    );
  });

  // render general info
  const vetoText = props.vetoEnabled ? (
    <RenderTextSquare
      key="sd_rt_veto"
      keyText="veto"
      idx={0}
      xOffset={-4 * margin}
      yOffset={boxWidth * 0.5}
      text={[CNST.N_VETO + '☑️']}
      fontSize={[0.4]}
      noRect={true}
      textAnchor="left"
      onClick={() => {
        props.onItemClick('vetoEnabled');
      }}
    />
  ) : null;

  const draculaStrength = props.draculaStrength ? (
    <RenderTextSquare
      key="sd_rt_dstrength"
      keyText="dstrength"
      idx={0}
      xOffset={-4 * margin}
      yOffset={boxWidth * 1.3}
      text={[CNST.N_VAMPIRE + '💪🏻']}
      fontSize={[0.4]}
      noRect={true}
      textAnchor="left"
      onClick={() => {
        props.onItemClick('draculaStrong');
      }}
    />
  ) : null;

  return (
    <>
      {vmStatus}
      {vlStatus}
      {elStatus}
      {vetoText}
      {draculaStrength}
    </>
  );
}
