import Enzyme from 'enzyme';

import { BreadcrumbJsonLd } from 'next-seo';
import Breadcrumbs from './Breadcrumbs';

jest.mock('next-seo', () => ({
  BreadcrumbJsonLd: jest.fn().mockReturnValue(null),
}));

it('calls <BreadcrumbJsonLd />', () => {
  const itemListElements = [
    {
      position: 1,
      name: 'Play',
      item: '/play',
    },
  ];
  Enzyme.mount(<Breadcrumbs itemListElements={itemListElements} />);
  expect(BreadcrumbJsonLd).toHaveBeenCalled();
});
