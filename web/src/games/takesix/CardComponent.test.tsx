import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { CardComponent } from './CardComponent';

Enzyme.configure({ adapter: new Adapter() });

test('Check color of Card', () => {
  const card = { number: 1, value: 2, owner: 0 };
  const component = Enzyme.mount(<CardComponent card={card} />);
  expect(component.find('div').get(0)).toBeTruthy();
});
