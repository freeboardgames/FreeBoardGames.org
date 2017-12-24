import * as React from 'react';
import Home from './Home';
import { mount, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { expect } from 'chai';
import 'mocha';

describe('Home', () => {

  it('should contain Chess option', () => {
    const wrapper = mount(<MuiThemeProvider><Home/></MuiThemeProvider>);
    expect(wrapper.text()).to.include('Chess');
  });

});
