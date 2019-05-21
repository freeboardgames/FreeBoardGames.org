import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import Home from '../Home/HomeAsync';
import { StaticRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const context = {};
  it('should go to home', () => {
    const wrapper = Enzyme.mount(
      <StaticRouter location={'/'} context={context}>
        <App />
      </StaticRouter>,
    );
    expect(wrapper.find(Home)).to.have.lengthOf(1);
    expect(wrapper.html()).to.not.contain('messagePage.notFound');
  });

  it('should show not found page', () => {
    const wrapper = Enzyme.mount(
      <StaticRouter location={'/doesnotexist'} context={context}>
        <App />
      </StaticRouter>,
    );
    expect(wrapper.html()).to.contain('messagePage.notFound');
  });
});
