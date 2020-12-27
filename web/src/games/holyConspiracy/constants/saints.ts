export const saintImgHeight = 7;

export enum ESaintPowers {
  RepelBook = 'Repel Book',
  AttractBook = 'Attract Book',
  RepelSaint = 'Repel Saint',
  AttractSaint = 'Attract Saint',
  LongJourney = 'Long Journey',
  RideBook = 'Ride with Book',
}

export const SAINTS = [
  {
    name: 'Gōpālānanda',
    power: ESaintPowers.AttractSaint,
    powerTag: '',
    image: require('../media/saints/gopalanandswami.png'),
    description: ['He can attract Saints.'],
  },
  {
    name: 'Brahmānanda',
    power: ESaintPowers.RideBook,
    powerTag: '',
    image: require('../media/saints/brahamanandswami.png'),
    description: ['He can ride with the book.'],
  },
  {
    name: 'Gunātītānanda',
    power: ESaintPowers.LongJourney,
    powerTag: '',
    image: require('../media/saints/gunatitanandswami.png'),
    description: ['He can travel longer distance (upto 2 cities).'],
  },
  // {
  //     name: 'Muktānanda',
  //     power: ESaintPowers.RepelBook,
  //     powerTag: '',
  //     image: require('../media/saints/muktanandswami.png'),
  //     description: ['He can repel Book.'],
  // },
  // {
  //     name: 'Prēmānanda',
  //     power: ESaintPowers.AttractBook,
  //     powerTag: '',
  //     image: require('../media/saints/premanandswami.png'),
  //     description: ['He can attract Book.'],
  // },
  // {
  //     name: 'Śukānanda',
  //     power: ESaintPowers.RepelSaint,
  //     powerTag: '',
  //     image: require('../media/saints/shukanandswami.png'),
  //     description: ['He can repel Saints.'],
  // }
];
