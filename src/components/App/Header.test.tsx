import * as React from 'react';
import Header from './Header';
import * as Enzyme from 'enzyme';
import { expect } from 'chai';
import * as Adapter from 'enzyme-adapter-react-16';
import 'mocha';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {

  it('should contain Turnato name', () => {
    const wrapper = Enzyme.mount(<Header/>);
    expect(wrapper.text()).to.include('Turnato');
  });

});
