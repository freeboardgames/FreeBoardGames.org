import { ICard } from './interfaces';

export function card(id: number, color: number, value: number): ICard {
  return {
    id,
    color,
    value,
  };
}
