import { Card, CardComponent } from './CardComponent';
export default {
  title: 'Games/Take 6/Components',
  parameters: {
    backgrounds: [
      {
        name: 'dark background',
        value: '#000',
        default: true,
      },
    ],
  },
};
/* eslint-disable react/prop-types */

const Container = (props) => (
  <div
    style={
      props.style || {
        height: 500,
        width: 400,
        display: 'inline-block',
      }
    }
  >
    {props.children}
  </div>
);
/* eslint-enable react/prop-types */

const largeCardNumberStyle = {
  fontSize: 200,
  fontWeight: 800,
};
const card_1 = {
  number: 1,
  value: 1,
  owner: 0,
};
export const Card_1 = () => {
  return (
    <Container>
      <Card card={card_1} cardNumberStyle={largeCardNumberStyle} />
    </Container>
  );
};
const card_5 = {
  number: 5,
  value: 2,
  owner: 0,
};
export const Card_5 = () => {
  return (
    <Container>
      <Card card={card_5} cardNumberStyle={largeCardNumberStyle} />
    </Container>
  );
};
const card_10 = {
  number: 10,
  value: 3,
  owner: 0,
};
export const Card_10 = () => {
  return (
    <Container>
      <Card card={card_10} cardNumberStyle={largeCardNumberStyle} />
    </Container>
  );
};
const card_11 = {
  number: 11,
  value: 5,
  owner: 0,
};
export const Card_11 = () => {
  return (
    <Container>
      <Card card={card_11} cardNumberStyle={largeCardNumberStyle} />
    </Container>
  );
};
const card_55 = {
  number: 55,
  value: 7,
  owner: 0,
};
export const Card_55 = () => {
  return (
    <Container>
      <Card card={card_55} cardNumberStyle={largeCardNumberStyle} />
    </Container>
  );
};
const card_104 = {
  number: 104,
  value: 1,
  owner: 0,
};
export const Hand = () => {
  return (
    <div>
      <CardComponent card={card_1} />
      <CardComponent card={card_5} />
      <CardComponent card={card_10} />
      <CardComponent card={card_11} />
      <CardComponent card={card_55} />
      <CardComponent card={card_104} />
    </div>
  );
};
