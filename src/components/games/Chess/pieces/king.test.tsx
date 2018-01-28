/*
 * Copyright 2018 The boardgame.io Authors
 *
 * Use of this source code is governed by a MIT-style
 * license that can be found in the LICENSE file or at
 * https://opensource.org/licenses/MIT.
 */

import * as React from 'react';
import King from './king';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('king white is rendered', () => {
  const piece = Enzyme.mount(<svg><King color="w" /></svg>);
  expect(piece.find('path').length).toBeGreaterThan(0);
});

test('king black is rendered', () => {
  const piece = Enzyme.mount(<svg><King color="b" /></svg>);
  expect(piece.find('path').length).toBeGreaterThan(0);
});
