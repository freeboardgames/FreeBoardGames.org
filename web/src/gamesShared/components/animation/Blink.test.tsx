import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Blink } from './Blink';

Enzyme.configure({ adapter: new Adapter() });

test('Blink start not hidden', () => {
  const blink = Enzyme.mount(
    <Blink totalDurationMillis={1000} blinkDurationMillis={250}>
      <div>Foo</div>
    </Blink>,
  );
  blink.setState({ hidden: false, startTime: 0 });
  (blink.instance() as Blink)._animate(125)();
  expect(blink.find('div').length).toEqual(1);
});

test('Blink should hide', () => {
  const blink = Enzyme.mount(
    <Blink totalDurationMillis={1000} blinkDurationMillis={250}>
      <div>Foo</div>
    </Blink>,
  );
  blink.setState({ hidden: false, startTime: 0 });
  (blink.instance() as Blink)._animate(350)();
  expect(blink.state('hidden')).toBeTruthy();
});

test('Blink finish not hidden', () => {
  const blink = Enzyme.mount(
    <Blink totalDurationMillis={1000} blinkDurationMillis={250}>
      <div>Foo</div>
    </Blink>,
  );
  blink.setState({ hidden: false, startTime: 0 });
  (blink.instance() as Blink)._animate(1350)();
  expect(blink.find('div').length).toEqual(1);
});
