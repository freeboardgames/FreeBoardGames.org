import { mount, ReactWrapper } from 'enzyme';
import { Image } from '../images';

import ColourCode, { IColourCodeProps } from './ColourCode';

let wrapper: ReactWrapper;
let props: IColourCodeProps;

describe('ColourCode', () => {
  beforeAll(() => {
    props = {
      position: 4,
      currentColourId: 3,
      colour: { id: 3, img: 'c', hex: '#333' },
      onClick: jest.fn(),
    };

    wrapper = mount(<ColourCode {...props} />);
  });

  it('should be grey if colour is empty', () => {
    const wrapperWithoutColour = mount(<ColourCode {...props} colour={null} />);
    expect(wrapperWithoutColour.find(Image).exists()).toBeFalse();

    expect(wrapperWithoutColour.find('button').props().style).toMatchObject({ backgroundColor: 'grey' });
  });

  it('should show button with Colour Image', () => {
    const image = wrapper.find(Image);

    expect(image.props()).toMatchObject({
      img: props.colour.img,
      hex: props.colour.hex,
    });
  });

  it('should invoque method onClick with colourId and positon', () => {
    wrapper.find('button').at(0).simulate('click');

    expect(props.onClick).toHaveBeenCalledWith(props.colour.id, props.position);
  });
});
