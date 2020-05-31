import Enzyme from 'enzyme';

/* istanbul ignore next */
export function getByTestID(wrapper: Enzyme.ShallowWrapper | Enzyme.ReactWrapper, testid: string) {
  return wrapper.find(`[data-testid="${testid}"]`);
}
