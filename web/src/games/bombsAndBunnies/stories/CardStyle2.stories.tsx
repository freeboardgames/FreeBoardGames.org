import React from 'react';
import { CardStyle } from '../components/shared/interfaces';
import {
  CardComponent,
  BombCardComponent,
  BunnyCardComponent,
  FaceDownCardComponent,
} from '../components/CardComponent';
export default {
  title: 'Games/Bombs & Bunnies/Cards/Style2',
  component: CardComponent,
};
const defaultStyle: CardStyle = CardStyle.Style2;
export const FaceDown = () => <FaceDownCardComponent style={defaultStyle} />;
export const Bunny = () => <BunnyCardComponent style={defaultStyle} />;
export const Bomb = () => <BombCardComponent style={defaultStyle} />;
