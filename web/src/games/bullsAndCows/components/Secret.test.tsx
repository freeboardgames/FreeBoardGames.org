import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Image } from '../images';

import Secret, { ISecretProps } from './Secret';

Enzyme.configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
let props: ISecretProps;

describe('Secret', () => {
  beforeAll(() => {
    props = {
      secret: [
        { id: 6, img: 'f', hex: '#666' },
        { id: 1, img: 'a', hex: '#111' },
        { id: 2, img: 'b', hex: '#222' },
      ],
    };

    wrapper = mount(<Secret {...props} />);
  });

  it('should show CODE: prefix for number', () => {
    expect(wrapper.find('.attempt.result > .number').text()).toContain('code:');
  });

  it('should have the total of digits from secret', () => {
    const digit = wrapper.find('.attempt.result > .digit');
    expect(digit).toHaveLength(props.secret.length);
  });

  it('should show Image with secret Colour', () => {
    const images = wrapper.find(Image);

    expect(images.at(0).props()).toMatchObject({
      img: props.secret[0].img,
      hex: props.secret[0].hex,
    });
    expect(images.at(1).props()).toMatchObject({
      img: props.secret[1].img,
      hex: props.secret[1].hex,
    });
    expect(images.at(2).props()).toMatchObject({
      img: props.secret[2].img,
      hex: props.secret[2].hex,
    });
  });
});
