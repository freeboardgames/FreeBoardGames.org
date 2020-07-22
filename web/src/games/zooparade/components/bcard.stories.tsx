import { BCard } from './bcard';

export default {
  title: 'Games/Zoo Parade/Components/Card',
  parameters: {
    backgrounds: [{ name: 'dark background', value: '#000', default: true }],
  },
};

export const Green5 = () => <BCard card={{ id: 0, value: 5, color: 0 }} empty={null} />;

export const Blue3 = () => <BCard card={{ id: 0, value: 3, color: 4 }} empty={null} />;

export const Hidden = () => <BCard card={null} empty={null} />;

export const GreenHidden = () => <BCard card={null} empty={0} />;

export const BlueHidden = () => <BCard card={null} empty={4} />;

export const Deck = () => <BCard card={null} empty={-2} />;
