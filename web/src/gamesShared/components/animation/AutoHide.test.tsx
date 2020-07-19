import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AutoHide } from './AutoHide';

Enzyme.configure({ adapter: new Adapter() });

test('AutoHide start not hidden', () => {
  const blink = Enzyme.mount(
    <AutoHide totalDurationMillis={1000}>
      <div>Foo</div>
    </AutoHide>,
  );
  blink.setState({ hidden: false, startTime: 0 });
  (blink.instance() as AutoHide)._animate(125)();
  expect(blink.find('div').length).toEqual(1);
});

test('AutoHide should hide', () => {
  const blink = Enzyme.mount(
    <AutoHide totalDurationMillis={1000}>
      <div>Foo</div>
    </AutoHide>,
  );
  blink.setState({ hidden: false, startTime: 0 });
  (blink.instance() as AutoHide)._animate(2000)();
  expect(blink.state('hidden')).toBeTruthy();
});
