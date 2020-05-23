import Enzyme from 'enzyme';
import { getByTestID } from 'helpers/tests';
import SearchBox from './SearchBox';

let wrapper: Enzyme.ShallowWrapper;
let mockHandleSearchOnChange: jest.Mock;

describe('SearchBox', () => {
  beforeEach(() => {
    mockHandleSearchOnChange = jest.fn();
    wrapper = Enzyme.shallow(<SearchBox handleSearchOnChange={mockHandleSearchOnChange} />).dive();
  });

  it('renders', () => {
    const searchIcon = getByTestID(wrapper, 'SearchIcon').at(0);
    expect(searchIcon.exists()).toBeTruthy();
  });

  it('does not show ClearIcon', () => {
    const clearSearchFieldButton = getByTestID(wrapper, 'clearSearchField').at(0);
    expect(clearSearchFieldButton.exists()).toBeFalsy();
  });

  it('calls props.handleSearchOnChange()', () => {
    const instance: any = wrapper.instance();
    const event = { target: { value: 'foo' } };
    instance._handleSearchOnChange(event);
    expect(mockHandleSearchOnChange).toHaveBeenCalledWith({ target: { value: 'foo' } });
  });

  it('shows ClearIcon', () => {
    const input = wrapper.find(`[data-testid="searchInput"]`).at(0);
    input.simulate('change', { target: { value: 'foo' } });

    const endAdornment = getByTestID(wrapper, 'searchInput').at(0).prop('endAdornment');
    expect(endAdornment).not.toBeUndefined();
  });

  it('clears search query', () => {
    const instance: any = wrapper.instance();
    const event = { target: { value: 'foo' } };
    instance._handleSearchOnChange(event);

    // has clear button
    const endAdornment0 = getByTestID(wrapper, 'searchInput').at(0).prop('endAdornment');
    expect(endAdornment0).not.toBeUndefined();

    instance._clearSearchQuery();

    // clear button disappears
    const endAdornment1 = getByTestID(wrapper, 'searchInput').at(0).prop('endAdornment');
    expect(endAdornment1).toBeUndefined();

    // text cleared
    const inputAfter = getByTestID(wrapper, 'searchInput');
    expect(inputAfter.props().value).toEqual('');
  });
});
