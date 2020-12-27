export const cityBoardHeight = 100;
export const cityBoardWidth = 100;
export const cityImgSize = 16;
export const cityFontSize = 3.25;

export enum ECyNames {
  Delhi = 'Delhi',
  Jaipur = 'Jaipur',
  Mumbai = 'Mumbai',
  Bangalore = 'Bangalore',
  Colombo = 'Colombo',
  Chennai = 'Chennai',
  Andaman = 'Andaman',
  Laos = 'Laos',
  Singapore = 'Singapore',
  Philippines = 'Philippines',
  HongKong = 'HongKong',
  Taiwan = 'Taiwan',
  Shanghai = 'Shanghai',
  Bhutan = 'Bhutan',
  Tibet = 'Tibet',
  Ladakh = 'Ladakh',
  Shimla = 'Shimla',
  Haridwar = 'Haridwar',
  Nagpur = 'Nagpur',
  Kolkata = 'Kolkata',
  Burma = 'Burma',
  Hanoi = 'Hanoi',
  Chengdu = 'Chengdu',
  Kathmandu = 'Kathmandu',
  Himalaya = 'Himalaya',
}

export enum ECityTextPosition {
  Top,
  Bottom,
}

export enum ECityDotPosition {
  Top,
  Right,
  Left,
  Bottom,
  Middle,
  Text,
}

interface ICoordinatePos {
  x: number;
  y: number;
}

export interface ICityData {
  name: ECyNames;
  image?: any;
  position: ICoordinatePos;
  textPosition: ECityTextPosition;
  textBoxScale?: number;
  dotPosition?: ECityDotPosition[];
  isHeadQuarter?: string;
  connected: ECyNames[];
}

export const getCityTextPosition = (c: ICityData) => {
  let { x, y } = c.position;

  if (c.textPosition === ECityTextPosition.Bottom) {
    y = y + cityImgSize * 0.425;
  } else if (c.textPosition === ECityTextPosition.Top) {
    y = y - cityImgSize / 2 + cityFontSize * 1.1;
  } else {
    y = y + cityFontSize / 2;
  }

  return { x, y };
};

export const getCityTextBoxSize = (c: ICityData) => cityFontSize * c.name.length * 0.6 * (c.textBoxScale || 1);

export const CITIES: ICityData[] = [
  {
    name: ECyNames.Delhi,
    isHeadQuarter: '0',
    position: { x: cityImgSize / 2, y: cityImgSize / 2 },
    textPosition: ECityTextPosition.Top,
    image: require('../media/cities/delhi.jpg'),
    connected: [ECyNames.Ladakh],
  },
  {
    name: ECyNames.Jaipur,
    isHeadQuarter: null,
    position: { x: cityImgSize * 0.65, y: cityBoardHeight * 0.25 },
    textPosition: ECityTextPosition.Bottom,
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Left, ECityDotPosition.Top],
    connected: [ECyNames.Delhi],
  },
  {
    name: ECyNames.Mumbai,
    isHeadQuarter: null,
    position: { x: cityImgSize * 0.52, y: cityBoardHeight * 0.5 },
    textPosition: ECityTextPosition.Top,
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Top, ECityDotPosition.Left],
    // image: require('../media/cities/mumbai.jpg'),
    connected: [ECyNames.Jaipur],
  },
  {
    name: ECyNames.Bangalore,
    isHeadQuarter: null,
    position: { x: cityImgSize * 0.6, y: cityBoardHeight * 0.7 },
    textPosition: ECityTextPosition.Bottom,
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Top],
    textBoxScale: 0.85,
    connected: [ECyNames.Mumbai, ECyNames.Nagpur],
  },
  {
    name: ECyNames.Colombo,
    isHeadQuarter: '2',
    position: { x: cityImgSize / 2, y: cityBoardHeight - cityImgSize / 2 },
    dotPosition: [ECityDotPosition.Right],
    image: require('../media/cities/colombo.jpg'),
    textPosition: ECityTextPosition.Bottom,
    connected: [ECyNames.Bangalore],
  },
  {
    name: ECyNames.Chennai,
    isHeadQuarter: null,
    position: { x: cityBoardWidth * 0.27, y: cityBoardHeight - cityImgSize * 0.7 },
    textPosition: ECityTextPosition.Bottom,
    dotPosition: [ECityDotPosition.Middle],
    connected: [ECyNames.Colombo],
  },
  {
    name: ECyNames.Andaman,
    isHeadQuarter: null,
    position: { x: cityBoardWidth / 2, y: cityBoardHeight - cityImgSize / 2 },
    // image: require('../media/cities/andaman.jpg'),
    textPosition: ECityTextPosition.Bottom,
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Top],
    connected: [ECyNames.Chennai],
  },
  {
    name: ECyNames.Laos,
    isHeadQuarter: null,
    position: { x: cityBoardWidth * 0.72, y: cityBoardHeight - cityImgSize * 0.65 },
    textPosition: ECityTextPosition.Bottom,
    dotPosition: [ECityDotPosition.Middle],
    connected: [ECyNames.Andaman],
  },
  {
    name: ECyNames.Singapore,
    isHeadQuarter: '1',
    position: { x: cityBoardWidth - cityImgSize / 2, y: cityBoardHeight - cityImgSize / 2 },
    image: require('../media/cities/singapore.jpg'),
    textPosition: ECityTextPosition.Bottom,
    textBoxScale: 0.85,
    dotPosition: [ECityDotPosition.Right],
    connected: [ECyNames.Laos],
  },
  {
    name: ECyNames.Philippines,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Bottom,
    position: { x: cityBoardWidth - cityImgSize * 0.6, y: cityBoardHeight * 0.7 },
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Top],
    textBoxScale: 0.78,
    connected: [ECyNames.Singapore],
  },
  {
    name: ECyNames.HongKong,
    isHeadQuarter: null,
    position: { x: cityBoardWidth - cityImgSize * 0.6, y: cityBoardHeight / 2 },
    textPosition: ECityTextPosition.Top,
    textBoxScale: 0.95,
    dotPosition: [ECityDotPosition.Top, ECityDotPosition.Right, ECityDotPosition.Text],
    // image: require('../media/cities/hongkong.jpg'),
    connected: [ECyNames.Philippines],
  },
  {
    name: ECyNames.Taiwan,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Bottom,
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Top],
    position: { x: cityBoardWidth - cityImgSize / 2, y: cityBoardHeight * 0.25 },
    connected: [ECyNames.HongKong],
  },
  {
    name: ECyNames.Shanghai,
    isHeadQuarter: '3',
    position: { x: cityBoardWidth - cityImgSize / 2, y: cityImgSize / 2 },
    textPosition: ECityTextPosition.Top,
    dotPosition: [ECityDotPosition.Right],
    textBoxScale: 0.9,
    image: require('../media/cities/shanghai.jpg'),
    connected: [ECyNames.Taiwan],
  },
  {
    name: ECyNames.Bhutan,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Bottom,
    dotPosition: [ECityDotPosition.Top, ECityDotPosition.Text],
    position: { x: cityBoardWidth * 0.72, y: cityImgSize / 2 },
    connected: [ECyNames.Shanghai],
  },
  {
    name: ECyNames.Tibet,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Top,
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Left],
    position: { x: cityBoardWidth * 0.525, y: cityImgSize * 0.525 },
    // image: require('../media/cities/Thimphu.jpg'),
    connected: [ECyNames.Bhutan],
  },
  {
    name: ECyNames.Ladakh,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Top,
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Bottom],
    position: { x: cityBoardWidth * 0.25, y: cityImgSize / 2 },
    connected: [ECyNames.Tibet],
  },
  {
    name: ECyNames.Shimla,
    isHeadQuarter: null,
    position: { x: cityBoardWidth * 0.27, y: cityBoardHeight * 0.25 },
    textPosition: ECityTextPosition.Top,
    connected: [ECyNames.Mumbai, ECyNames.Ladakh],
  },
  {
    name: ECyNames.Haridwar,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Bottom,
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Top],
    position: { x: cityBoardWidth * 0.28, y: cityBoardHeight * 0.48 },
    connected: [ECyNames.Mumbai],
  },
  {
    name: ECyNames.Nagpur,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Bottom,
    position: { x: cityBoardWidth * 0.3, y: cityBoardHeight * 0.68 },
    connected: [ECyNames.Mumbai],
  },
  {
    name: ECyNames.Kolkata,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Bottom,
    position: { x: cityBoardWidth * 0.5, y: cityBoardHeight * 0.72 },
    connected: [ECyNames.Nagpur, ECyNames.Andaman],
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Top],
  },
  {
    name: ECyNames.Burma,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Bottom,
    position: { x: cityBoardWidth * 0.71, y: cityBoardHeight * 0.68 },
    connected: [ECyNames.Kolkata, ECyNames.Laos, ECyNames.HongKong],
  },
  {
    name: ECyNames.Hanoi,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Bottom,
    position: { x: cityBoardWidth * 0.73, y: cityBoardHeight * 0.5 },
    connected: [ECyNames.HongKong],
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Top],
  },
  {
    name: ECyNames.Chengdu,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Top,
    position: { x: cityBoardWidth * 0.725, y: cityBoardHeight * 0.28 },
    connected: [ECyNames.HongKong, ECyNames.Taiwan],
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Bottom],
  },
  {
    name: ECyNames.Kathmandu,
    isHeadQuarter: null,
    textPosition: ECityTextPosition.Bottom,
    position: { x: cityBoardWidth * 0.5, y: cityBoardHeight * 0.29 },
    connected: [ECyNames.Chengdu, ECyNames.Shimla, ECyNames.Tibet],
    dotPosition: [ECityDotPosition.Text, ECityDotPosition.Top],
  },
  {
    name: ECyNames.Himalaya,
    isHeadQuarter: null,
    position: { x: cityBoardWidth / 2, y: cityBoardHeight / 2 },
    textPosition: ECityTextPosition.Bottom,
    dotPosition: [ECityDotPosition.Top],
    textBoxScale: 0.9,
    image: require('../media/cities/himalaya.jpg'),
    connected: [ECyNames.Kathmandu, ECyNames.Hanoi, ECyNames.Haridwar, ECyNames.Kolkata],
  },
];
