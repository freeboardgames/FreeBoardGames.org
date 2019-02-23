import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import { MessagePage } from './MessagePageClass';
import { Link } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

test('MessagePage starts with link hidden', () => {
  const msg = Enzyme.mount(
    <MemoryRouter><MessagePage type={'loading'} message={'loading'} /></MemoryRouter>,
  ).find(MessagePage);
  expect(msg.html()).not.to.contain('Go home');
});

test('MessagePage starts with link visible for errors', () => {
  const msg = Enzyme.mount(
    <MemoryRouter><MessagePage type={'error'} message={'Not Found'} /></MemoryRouter>,
  ).find(MessagePage);
  expect(msg.html()).to.contain('Go home');
});

test('MessagePage is hidden', () => {
  const msg = Enzyme.mount(
    <MemoryRouter><MessagePage type={'loading'} message={'loading'} /></MemoryRouter>,
  ).find(MessagePage);
  msg.setState({ linkHidden: true, startTime: 0 });
  (msg.instance() as MessagePage)._animate(125)();
  expect(msg.html()).not.to.contain('Go home');
});

test('MessagePage unhides link after 5 seconds', () => {
  const msg = Enzyme.mount(
    <MemoryRouter><MessagePage type={'loading'} message={'loading'} /></MemoryRouter>,
  ).find(MessagePage);
  msg.setState({ linkHidden: true, startTime: 0 });
  (msg.instance() as MessagePage)._animate(6000001)();
  expect(msg.html()).to.contain('Go home');
});
