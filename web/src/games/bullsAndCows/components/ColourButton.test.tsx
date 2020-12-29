import Enzyme, { mount, ReactWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Image } from '../images';

import ColourButton, { IColourButtonProps } from './ColourButton';

Enzyme.configure({ adapter: new Adapter() });

let wrapper: ReactWrapper;
let props: IColourButtonProps;

describe('ColourButton', () => {
  beforeAll(() => {
    props = {
      currentColourId: 3,
      colour: { id: 3, img: 'c', hex: '#333' },
      onClick: jest.fn(),
    };

    wrapper = mount(<ColourButton {...props} />);
  });

  it('should ignore in case colour is empty', () => {
    const wrapperWithoutColour = mount(<ColourButton {...props} colour={null} />);
    expect(wrapperWithoutColour.find(Image).exists()).toBeFalse();
  });

  it('should show button with Colour Image', () => {
    const image = wrapper.find(Image);

    expect(image.props()).toMatchObject({
      img: props.colour.img,
      hex: props.colour.hex,
    });
  });

  it('should invoque method onClick with colourId', () => {
    wrapper.find('button').at(0).simulate('click');

    expect(props.onClick).toHaveBeenCalledWith(props.colour.id);
  });
});
