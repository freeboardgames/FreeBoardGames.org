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

export enum cardEnum {
  SA,
  SK,
  SQ,
  SJ,
  S10,
  S9,
  S8,
  S7,
  S6,
  S5,
  S4,
  S3,
  S2,
  CA,
  CK,
  CQ,
  CJ,
  C10,
  C9,
  C8,
  C7,
  C6,
  C5,
  C4,
  C3,
  C2,
  DA,
  DK,
  DQ,
  DJ,
  D10,
  D9,
  D8,
  D7,
  D6,
  D5,
  D4,
  D3,
  D2,
  HA,
  HK,
  HQ,
  HJ,
  H10,
  H9,
  H8,
  H7,
  H6,
  H5,
  H4,
  H3,
  H2,
  GB,
}

export const deckAssets = {
  [cardEnum.SA]: imgAS,
  [cardEnum.S2]: img2S,
  [cardEnum.S3]: img3S,
  [cardEnum.S4]: img4S,
  [cardEnum.S5]: img5S,
  [cardEnum.S6]: img6S,
  [cardEnum.S7]: img7S,
  [cardEnum.S8]: img8S,
  [cardEnum.S9]: img9S,
  [cardEnum.S10]: img10S,
  [cardEnum.SJ]: imgJS,
  [cardEnum.SQ]: imgQS,
  [cardEnum.SK]: imgKS,
  [cardEnum.CA]: imgAC,
  [cardEnum.C2]: img2C,
  [cardEnum.C3]: img3C,
  [cardEnum.C4]: img4C,
  [cardEnum.C5]: img5C,
  [cardEnum.C6]: img6C,
  [cardEnum.C7]: img7C,
  [cardEnum.C8]: img8C,
  [cardEnum.C9]: img9C,
  [cardEnum.C10]: img10C,
  [cardEnum.CJ]: imgJC,
  [cardEnum.CQ]: imgQC,
  [cardEnum.CK]: imgKC,
  [cardEnum.DA]: imgAD,
  [cardEnum.D2]: img2D,
  [cardEnum.D3]: img3D,
  [cardEnum.D4]: img4D,
  [cardEnum.D5]: img5D,
  [cardEnum.D6]: img6D,
  [cardEnum.D7]: img7D,
  [cardEnum.D8]: img8D,
  [cardEnum.D9]: img9D,
  [cardEnum.D10]: img10D,
  [cardEnum.DJ]: imgJD,
  [cardEnum.DQ]: imgQD,
  [cardEnum.DK]: imgKD,
  [cardEnum.HA]: imgAH,
  [cardEnum.H2]: img2H,
  [cardEnum.H3]: img3H,
  [cardEnum.H4]: img4H,
  [cardEnum.H5]: img5H,
  [cardEnum.H6]: img6H,
  [cardEnum.H7]: img7H,
  [cardEnum.H8]: img8H,
  [cardEnum.H9]: img9H,
  [cardEnum.H10]: img10H,
  [cardEnum.HJ]: imgJH,
  [cardEnum.HQ]: imgQH,
  [cardEnum.HK]: imgKH,
  [cardEnum.GB]: imgGB,
};

const std_crib_deck = [
  { id: cardEnum.SA, faced: false, rank: 1 },
  { id: cardEnum.S2, faced: false, rank: 2 },
  { id: cardEnum.S3, faced: false, rank: 3 },
  { id: cardEnum.S4, faced: false, rank: 4 },
  { id: cardEnum.S5, faced: false, rank: 5 },
  { id: cardEnum.S6, faced: false, rank: 6 },
  { id: cardEnum.S7, faced: false, rank: 7 },
  { id: cardEnum.S8, faced: false, rank: 8 },
  { id: cardEnum.S9, faced: false, rank: 9 },
  { id: cardEnum.S10, faced: false, rank: 10 },
  { id: cardEnum.SJ, faced: false, rank: 11 },
  { id: cardEnum.SQ, faced: false, rank: 12 },
  { id: cardEnum.SK, faced: false, rank: 13 },
  { id: cardEnum.CA, faced: false, rank: 14 },
  { id: cardEnum.C2, faced: false, rank: 15 },
  { id: cardEnum.C3, faced: false, rank: 16 },
  { id: cardEnum.C4, faced: false, rank: 17 },
  { id: cardEnum.C5, faced: false, rank: 18 },
  { id: cardEnum.C6, faced: false, rank: 19 },
  { id: cardEnum.C7, faced: false, rank: 20 },
  { id: cardEnum.C8, faced: false, rank: 21 },
  { id: cardEnum.C9, faced: false, rank: 22 },
  { id: cardEnum.C10, faced: false, rank: 23 },
  { id: cardEnum.CJ, faced: false, rank: 24 },
  { id: cardEnum.CQ, faced: false, rank: 25 },
  { id: cardEnum.CK, faced: false, rank: 26 },
  { id: cardEnum.DA, faced: false, rank: 27 },
  { id: cardEnum.D2, faced: false, rank: 28 },
  { id: cardEnum.D3, faced: false, rank: 29 },
  { id: cardEnum.D4, faced: false, rank: 30 },
  { id: cardEnum.D5, faced: false, rank: 31 },
  { id: cardEnum.D6, faced: false, rank: 32 },
  { id: cardEnum.D7, faced: false, rank: 33 },
  { id: cardEnum.D8, faced: false, rank: 34 },
  { id: cardEnum.D9, faced: false, rank: 35 },
  { id: cardEnum.D10, faced: false, rank: 36 },
  { id: cardEnum.DJ, faced: false, rank: 37 },
  { id: cardEnum.DQ, faced: false, rank: 38 },
  { id: cardEnum.DK, faced: false, rank: 39 },
  { id: cardEnum.HA, faced: false, rank: 40 },
  { id: cardEnum.H2, faced: false, rank: 41 },
  { id: cardEnum.H3, faced: false, rank: 42 },
  { id: cardEnum.H4, faced: false, rank: 43 },
  { id: cardEnum.H5, faced: false, rank: 44 },
  { id: cardEnum.H6, faced: false, rank: 45 },
  { id: cardEnum.H7, faced: false, rank: 46 },
  { id: cardEnum.H8, faced: false, rank: 47 },
  { id: cardEnum.H9, faced: false, rank: 48 },
  { id: cardEnum.H10, faced: false, rank: 49 },
  { id: cardEnum.HJ, faced: false, rank: 50 },
  { id: cardEnum.HQ, faced: false, rank: 51 },
  { id: cardEnum.HK, faced: false, rank: 52 },
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
