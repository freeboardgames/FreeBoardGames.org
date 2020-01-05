import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardComponent } from './CardComponent';
import Card from './card';

Enzyme.configure({ adapter: new Adapter() });

test('Check color of Card', () => {
  const card = new Card(1, 2, 0);
  const component = Enzyme.mount(<CardComponent card={card} />);
  expect(component.find('div').get(0).props.style.background).toEqual('#3498db');
});
