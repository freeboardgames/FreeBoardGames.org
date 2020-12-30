import { ECyNames } from './cities';

export const saintImgHeight = 9;
export const saintImgWidth = saintImgHeight;

export enum ESaintPowers {
  RepelBook = 'Repel Book',
  AttractBook = 'Attract Book',
  RepelSaint = 'Repel Saint',
  AttractSaint = 'Attract Saint',
  LongJourney = 'Long Journey',
  RideBook = 'Ride with Book',
}

export interface ESaintInfo{
    name: string;
    power: ESaintPowers;
    powerTag: string;
    image: any;
    description: string[]; 
    isInCity: ECyNames;
    isMesmerized: number;
} 

export const SAINTS: ESaintInfo[] = [
  {
    name: 'Gōpālānanda',
    power: ESaintPowers.AttractSaint,
    powerTag: '',
    image: require('../media/saints/gopalanandswami.png'),
    description: ['He can attract Saints.'],
    isInCity: ECyNames.Philippines,
    isMesmerized: 0,
  },
  {
    name: 'Brahmānanda',
    power: ESaintPowers.RideBook,
    powerTag: '',
    image: require('../media/saints/brahamanandswami.png'),
    description: ['He can ride with the book.'],
    isInCity: ECyNames.Philippines,
    isMesmerized: 0,
  },
  {
    name: 'Gunātītānanda',
    power: ESaintPowers.LongJourney,
    powerTag: '',
    image: require('../media/saints/gunatitanandswami.png'),
    description: ['He can travel longer distance (upto 2 cities).'],
    isInCity: ECyNames.Philippines,
    isMesmerized: 0,
  },
  {
      name: 'Muktānanda',
      power: ESaintPowers.RepelBook,
      powerTag: '',
      image: require('../media/saints/muktanandswami.png'),
      description: ['He can repel Book.'],
      isInCity: ECyNames.Philippines,
      isMesmerized: 0,
  },
  {
      name: 'Prēmānanda',
      power: ESaintPowers.AttractBook,
      powerTag: '',
      image: require('../media/saints/premanandswami.png'),
      description: ['He can attract Book.'],
      isInCity: ECyNames.Philippines,
      isMesmerized: 0,
  },
  {
      name: 'Śukānanda',
      power: ESaintPowers.RepelSaint,
      powerTag: '',
      image: require('../media/saints/shukanandswami.png'),
      description: ['He can repel Saints.'],
      isInCity: ECyNames.Philippines,
      isMesmerized: 0,
  }
];
