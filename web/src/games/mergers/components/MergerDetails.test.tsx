import React from 'react';
import Enzyme, { ReactWrapper } from 'enzyme';

import { MergerDetails, MergerDetailsProps } from './MergerDetails';
import { Chain } from '../types';

const setUpComponent = (): ReactWrapper<MergerDetailsProps, {}, MergerDetails> => {
  return Enzyme.mount(
    <MergerDetails
      merger={{
        survivingChain: Chain.Continental,
        chainToMerge: Chain.Tower,
        chainSize: 3,
        stockCounts: { '0': 10, '1': 5 },
        bonuses: { '0': 3000, '1': 1500 },
      }}
      playOrder={['0', '1']}
      playerIdToNameFn={(id: string) => `Test Player ${id}`}
    />,
  );
};

describe('MergerDetails', () => {
  let comp: ReactWrapper<MergerDetailsProps, {}, MergerDetails>;
  beforeEach(() => {
    comp = setUpComponent();
  });
  it('renders the stock counts', () => {
    expect(comp.text()).toContain('The following players have Tower stock:');
    expect(comp.text()).toContain('Test Player 0 has 10');
    expect(comp.text()).toContain('Test Player 1 has 5');
  });
  it('renders the bonuses', () => {
    expect(comp.text()).toContain('With 3 hotels, the bonuses are:');
    expect(comp.text()).toContain('Test Player 0 gets $3000');
    expect(comp.text()).toContain('Test Player 1 gets $1500');
  });
});
