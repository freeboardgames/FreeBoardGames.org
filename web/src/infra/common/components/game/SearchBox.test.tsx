import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import SearchBox from './SearchBox';

let mockHandleSearchOnChange: jest.Mock;

describe('SearchBox', () => {
  beforeEach(() => {
    mockHandleSearchOnChange = jest.fn();
    render(<SearchBox onInputChange={mockHandleSearchOnChange} />);
  });

  it('renders', () => {
    expect(screen.getByTestId('SearchIcon')).toBeInTheDocument();
  });

  it('does not show ClearIcon', async () => {
    await waitFor(() => {
      expect(screen.queryByTestId('clearSearchField')).not.toBeInTheDocument();
    });
  });

  it('calls props.handleSearchOnChange()', () => {
    type('foo');
    expect(mockHandleSearchOnChange).toHaveBeenCalledWith('foo');
  });

  it('shows ClearIcon', () => {
    type('foo');
    expect(screen.getByTestId('clearSearchField')).toBeInTheDocument();
  });

  it('clears search query', async () => {
    type('foo');
    expect(screen.getByTestId('clearSearchField')).toBeInTheDocument();

    const input = type('');
    expect(input).toHaveValue('');

    await waitFor(() => {
      expect(screen.queryByTestId('clearSearchField')).not.toBeInTheDocument();
    });
  });
});

function type(value: string) {
  const input = screen.getByRole('textbox', { name: 'search' });
  act(() => {
    fireEvent.change(input, { target: { value } });
  });
  return input;
}
