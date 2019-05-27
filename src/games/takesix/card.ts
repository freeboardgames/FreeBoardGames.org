export default class Card {
  number: number;
  value: number;
  owner: number;

  constructor(num: number, value: number, owner: number) {
    this.number = num;
    this.value = value;
    this.owner = owner;
  }
}
