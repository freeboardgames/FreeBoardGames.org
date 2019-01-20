import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
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
  expect(blink.find('div').length).to.equal(1);
});

test('Blink should hide', () => {
  const blink = Enzyme.mount(
    <Blink totalDurationMillis={1000} blinkDurationMillis={250}>
      <div>Foo</div>
    </Blink>,
  );
  blink.setState({ hidden: false, startTime: 0 });
  (blink.instance() as Blink)._animate(350)();
  expect(blink.state('hidden')).to.equal(true);
});

test('Blink finish not hidden', () => {
  const blink = Enzyme.mount(
    <Blink totalDurationMillis={1000} blinkDurationMillis={250}>
      <div>Foo</div>
    </Blink>,
  );
  blink.setState({ hidden: false, startTime: 0 });
  (blink.instance() as Blink)._animate(1350)();
  expect(blink.find('div').length).to.equal(1);
});
