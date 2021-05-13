import Enzyme from 'enzyme';
import Header from './Header';

it('renders', () => {
  const wrapper = Enzyme.mount(<Header />);
  expect(wrapper.text()).toContain('titledescriptioncodedocschat');
});
