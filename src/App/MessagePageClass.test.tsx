import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import { MessagePage } from './MessagePageClass';
import { Link } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

test('MessagePage starts with link not hidden for errors', () => {
  const msg = Enzyme.mount(
    <MemoryRouter><MessagePage type={'error'} message={'Not Found'} /></MemoryRouter>,
  ).find(MessagePage);
  expect(msg.find(Link).length).to.equal(2);
});

test('MessagePage starts with link hidden', () => {
  const msg = Enzyme.mount(
    <MemoryRouter><MessagePage type={'loading'} message={'loading'} /></MemoryRouter>,
  ).find(MessagePage);
  msg.setState({ hidden: true, startTime: 0 });
  (msg.instance() as MessagePage)._animate(125)();
  expect(msg.find(Link).length).to.equal(1);
});

test('MessagePage unhides link after 5 seconds', () => {
  const msg = Enzyme.mount(
    <MemoryRouter><MessagePage type={'loading'} message={'loading'} /></MemoryRouter>,
  ).find(MessagePage);
  msg.setState({ hidden: true, startTime: 0 });
  (msg.instance() as MessagePage)._animate(5001)();
  expect(msg.find(Link).length).to.equal(2);
});
