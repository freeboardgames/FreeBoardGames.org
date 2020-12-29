import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Image } from '../images';
import { IAttempt } from '../service';

import Attempt from './Attempt';

Enzyme.configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
let attempt: IAttempt;

describe('Attempt', () => {
  beforeAll(() => {
    attempt = {
      hints: [1, 1, 1, 0, 0, -1],
      combination: [
        { id: 6, img: 'f', hex: '#666' },
        { id: 1, img: 'a', hex: '#111' },
        { id: 2, img: 'b', hex: '#222' },
        { id: 4, img: 'd', hex: '#444' },
        { id: 3, img: 'c', hex: '#333' },
        { id: 5, img: 'e', hex: '#555' },
      ],
    };

    wrapper = mount(<Attempt attempt={attempt} index="03" />);
  });

  it('should show index', () => {
    expect(wrapper.find('.number').text()).toContain('03');
  });

  it('should show hints with ✓, X and ∅', () => {
    expect(wrapper.find('.hints').text()).toContain('✓✓✓XX∅');
  });

  it('should have the total of digits from combination', () => {
    const digit = wrapper.find('.attempt > .digit');
    expect(digit).toHaveLength(attempt.combination.length);
  });

  it('should show Image with combination Colour', () => {
    const images = wrapper.find(Image);

    expect(images.at(0).props()).toMatchObject({
      img: attempt.combination[0].img,
      hex: attempt.combination[0].hex,
    });
    expect(images.at(3).props()).toMatchObject({
      img: attempt.combination[3].img,
      hex: attempt.combination[3].hex,
    });
    expect(images.at(5).props()).toMatchObject({
      img: attempt.combination[5].img,
      hex: attempt.combination[5].hex,
    });
  });
});
