import imgAC from './media/png/AC.png';
import imgKC from './media/png/KC.png';
import imgQC from './media/png/QC.png';
import imgJC from './media/png/JC.png';
import img10C from './media/png/10C.png';
import img9C from './media/png/9C.png';
import img8C from './media/png/8C.png';
import img7C from './media/png/7C.png';
import img6C from './media/png/6C.png';
import img5C from './media/png/5C.png';
import img4C from './media/png/4C.png';
import img3C from './media/png/3C.png';
import img2C from './media/png/2C.png';
import imgAS from './media/png/AS.png';
import imgKS from './media/png/KS.png';
import imgQS from './media/png/QS.png';
import imgJS from './media/png/JS.png';
import img10S from './media/png/10S.png';
import img9S from './media/png/9S.png';
import img8S from './media/png/8S.png';
import img7S from './media/png/7S.png';
import img6S from './media/png/6S.png';
import img5S from './media/png/5S.png';
import img4S from './media/png/4S.png';
import img3S from './media/png/3S.png';
import img2S from './media/png/2S.png';
import imgAD from './media/png/AD.png';
import imgKD from './media/png/KD.png';
import imgQD from './media/png/QD.png';
import imgJD from './media/png/JD.png';
import img10D from './media/png/10D.png';
import img9D from './media/png/9D.png';
import img8D from './media/png/8D.png';
import img7D from './media/png/7D.png';
import img6D from './media/png/6D.png';
import img5D from './media/png/5D.png';
import img4D from './media/png/4D.png';
import img3D from './media/png/3D.png';
import img2D from './media/png/2D.png';
import imgAH from './media/png/AH.png';
import imgKH from './media/png/KH.png';
import imgQH from './media/png/QH.png';
import imgJH from './media/png/JH.png';
import img10H from './media/png/10H.png';
import img9H from './media/png/9H.png';
import img8H from './media/png/8H.png';
import img7H from './media/png/7H.png';
import img6H from './media/png/6H.png';
import img5H from './media/png/5H.png';
import img4H from './media/png/4H.png';
import img3H from './media/png/3H.png';
import img2H from './media/png/2H.png';
import imgGB from './media/png/gray_back.png';

export const deckAssets = {
  AS: imgAS,
  '2S': img2S,
  '3S': img3S,
  '4S': img4S,
  '5S': img5S,
  '6S': img6S,
  '7S': img7S,
  '8S': img8S,
  '9S': img9S,
  '10S': img10S,
  JS: imgJS,
  QS: imgQS,
  KS: imgKS,
  AC: imgAC,
  '2C': img2C,
  '3C': img3C,
  '4C': img4C,
  '5C': img5C,
  '6C': img6C,
  '7C': img7C,
  '8C': img8C,
  '9C': img9C,
  '10C': img10C,
  JC: imgJC,
  QC: imgQC,
  KC: imgKC,
  AD: imgAD,
  '2D': img2D,
  '3D': img3D,
  '4D': img4D,
  '5D': img5D,
  '6D': img6D,
  '7D': img7D,
  '8D': img8D,
  '9D': img9D,
  '10D': img10D,
  JD: imgJD,
  QD: imgQD,
  KD: imgKD,
  AH: imgAH,
  '2H': img2H,
  '3H': img3H,
  '4H': img4H,
  '5H': img5H,
  '6H': img6H,
  '7H': img7H,
  '8H': img8H,
  '9H': img9H,
  '10H': img10H,
  JH: imgJH,
  QH: imgQH,
  KH: imgKH,
  greyBack: imgGB,
};

const std_crib_deck = [
  { id: 'AS', faced: false, rank: 1 },
  { id: '2S', faced: false, rank: 2 },
  { id: '3S', faced: false, rank: 3 },
  { id: '4S', faced: false, rank: 4 },
  { id: '5S', faced: false, rank: 5 },
  { id: '6S', faced: false, rank: 6 },
  { id: '7S', faced: false, rank: 7 },
  { id: '8S', faced: false, rank: 8 },
  { id: '9S', faced: false, rank: 9 },
  { id: '10S', faced: false, rank: 10 },
  { id: 'JS', faced: false, rank: 11 },
  { id: 'QS', faced: false, rank: 12 },
  { id: 'KS', faced: false, rank: 13 },
  { id: 'AC', faced: false, rank: 14 },
  { id: '2C', faced: false, rank: 15 },
  { id: '3C', faced: false, rank: 16 },
  { id: '4C', faced: false, rank: 17 },
  { id: '5C', faced: false, rank: 18 },
  { id: '6C', faced: false, rank: 19 },
  { id: '7C', faced: false, rank: 20 },
  { id: '8C', faced: false, rank: 21 },
  { id: '9C', faced: false, rank: 22 },
  { id: '10C', faced: false, rank: 23 },
  { id: 'JC', faced: false, rank: 24 },
  { id: 'QC', faced: false, rank: 25 },
  { id: 'KC', faced: false, rank: 26 },
  { id: 'AD', faced: false, rank: 27 },
  { id: '2D', faced: false, rank: 28 },
  { id: '3D', faced: false, rank: 29 },
  { id: '4D', faced: false, rank: 30 },
  { id: '5D', faced: false, rank: 31 },
  { id: '6D', faced: false, rank: 32 },
  { id: '7D', faced: false, rank: 33 },
  { id: '8D', faced: false, rank: 34 },
  { id: '9D', faced: false, rank: 35 },
  { id: '10D', faced: false, rank: 36 },
  { id: 'JD', faced: false, rank: 37 },
  { id: 'QD', faced: false, rank: 38 },
  { id: 'KD', faced: false, rank: 39 },
  { id: 'AH', faced: false, rank: 40 },
  { id: '2H', faced: false, rank: 41 },
  { id: '3H', faced: false, rank: 42 },
  { id: '4H', faced: false, rank: 43 },
  { id: '5H', faced: false, rank: 44 },
  { id: '6H', faced: false, rank: 45 },
  { id: '7H', faced: false, rank: 46 },
  { id: '8H', faced: false, rank: 47 },
  { id: '9H', faced: false, rank: 48 },
  { id: '10H', faced: false, rank: 49 },
  { id: 'JH', faced: false, rank: 50 },
  { id: 'QH', faced: false, rank: 51 },
  { id: 'KH', faced: false, rank: 52 },
];

export const dealCribbage = {
  pattern: { players: 2, increment: 1, hand: 6 },
  setup: {
    count: 0,
    deck: [],
    hands: {
      north: { playerId: 'Player 1', private: [], melds: [], tricks: [], played: [] },
      east: { playerId: 'Player 2', private: [], melds: [], tricks: [], played: [] },
      south: { playerId: 'Player 3', private: [], melds: [], tricks: [], played: [] },
      west: { playerId: 'Player 4', private: [], melds: [], tricks: [], played: [] },
    },
    stock: [],
  },
  fresh: std_crib_deck,
  turn: false,
};
