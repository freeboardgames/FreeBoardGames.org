import Enzyme from 'enzyme';

import ScrollToTop from './ScrollToTop';

it('scrolls to top', () => {
  const wrapper = Enzyme.mount(
    <ScrollToTop>
      <p>foo</p>
    </ScrollToTop>,
  );
  expect((global as any).scrollTo).toHaveBeenCalled();
  expect(wrapper.text()).toContain('foo');
});
