import React from 'react';
import { IHint, IHintMask } from '../interfaces';
import { BHintIcon } from './bhinticon';

import style from './bhand.css';

interface InnerWrapper {
  hint: IHint;

  keyPropagation: string;
}

export class BHint extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div className={style.hints}>
        {this.props.hint.color.map((value: number, index: number) => {
          const key = this.props.keyPropagation + 'BHint' + index.toString();
          return (
            <BHintIcon
              key={key}
              hintIcon={{ color: value !== IHintMask.NO ? index : -1, value: -1 }}
              keyPropagation={key}
            ></BHintIcon>
          );
        })}
        {this.props.hint.value.map((value: number, index: number) => {
          const key = this.props.keyPropagation + 'BHint' + index.toString();
          return (
            <BHintIcon
              key={key}
              hintIcon={{ color: -1, value: value !== IHintMask.NO ? index : -1 }}
              keyPropagation={key}
            ></BHintIcon>
          );
        })}
      </div>
    );
  }
}
